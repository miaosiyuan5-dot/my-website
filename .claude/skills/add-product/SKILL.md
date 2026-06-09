# 新增产品 / Add Product

用于向英文和中文产品页同时添加一个新产品卡片，然后自动提交部署。

---

## 第一步：向用户收集产品信息

用中文问用户以下信息（一次全问，不要分多次）：

```
请提供以下产品信息：

1. 产品英文名（例：Stone Scoop Teapot · Purple Clay）
2. 产品中文名（例：石瓢壶 · 紫泥）
3. 产品等级（选一个）：
   - master   → 大师级（Master Grade）
   - daily    → 日用（Daily Use）
   - derivative → 紫砂衍生品（Zisha Décor）
4. 美元价格（例：$320）
5. 人民币价格（例：¥2,280）
6. 英文简介（1-2句，例：A refined stone-scoop silhouette in aged purple clay...）
7. 中文简介（1-2句，例：以经典石瓢造型为基础...）
8. 标签（选一个，或留空）：Flagship / Bestseller / New / 留空
9. 图片链接（留空则自动生成占位图）
```

---

## 第二步：根据等级确定颜色和标签文字

| grade 值    | 背景色    | 英文标签      | 中文标签     |
|-------------|-----------|---------------|--------------|
| master      | `#8B6914` | Master Grade  | 大师级       |
| daily       | `#5C7A4E` | Daily Use     | 日用精品     |
| derivative  | `#4A6B8A` | Zisha Décor   | 紫砂衍生品   |

如果图片链接为空，根据等级生成占位图 URL：
- master:     `https://placehold.co/480x480/E4DECE/3A3028?text=<英文名关键词>`
- daily:      `https://placehold.co/480x480/C4A882/3A3028?text=<英文名关键词>`
- derivative: `https://placehold.co/480x480/D4C4A8/3A3028?text=<英文名关键词>`

占位图文字取英文名前两个单词，空格用 `+` 替换。

---

## 第三步：生成英文产品卡片 HTML

模板如下（将 `{{...}}` 替换为实际值）：

```html

        <!-- ── {{英文名}} ───────────────────────── -->
        <article class="product-card" data-grade="{{grade}}">
          <a href="product.html" class="product-card-image" aria-label="View {{英文名}}">
            {{如果有标签：<span class="product-card-badge">{{标签}}</span>，否则删除这行}}
            <img src="{{图片URL}}"
                 alt="{{英文名}}" loading="lazy" width="480" height="480" />
            <div class="product-card-overlay"><button class="quick-view-btn">View Details</button></div>
          </a>
          <div class="product-card-info">
            <span style="display:inline-block;padding:2px 10px;border-radius:20px;font-size:0.72rem;font-weight:600;letter-spacing:.05em;background:{{背景色}};color:#fff;margin-bottom:6px;">{{英文标签}}</span>
            <h3>{{英文名}}</h3>
            <p style="font-size:0.82rem;color:var(--color-text-muted);margin:4px 0 8px;">{{英文简介}}</p>
            <div class="price">{{美元价格}} <span style="font-size:0.85em;color:var(--color-text-muted);">/ {{人民币价格}}</span></div>
            <button class="btn-add-cart"
              data-id="{{grade}}-{{英文名小写，空格换连字符}}"
              data-name="{{英文名}}"
              data-price="{{纯数字价格，不含$}}"
              data-img="{{图片URL}}">Add to Cart</button>
          </div>
        </article>
```

---

## 第四步：插入英文版 collections.html

用 Edit 工具，找到文件中 `#collections-grid` 的最后一个 `</article>` 后、`</div>` 前的位置，将新卡片 HTML 追加进去。

具体做法：找到这段结束标记并在其前面插入：

```
        </article>

      </div>
    </div>
  </section>
```

old_string 用最后一个现有产品卡片结尾的几行（要唯一），new_string 在其后追加新卡片。

---

## 第五步：同步中文版 collections-zh.html

中文版用 JS 渲染，找到 `const allProducts = [` 数组，在最后一个 `}` 和 `];` 之间追加：

```javascript
      ,{
        name: '{{中文名}}',
        grade: '{{grade}}',
        gradeLabel: '{{中文标签}}',
        usd: '{{美元价格}}', cny: '{{人民币价格}}',
        img: '{{占位图文字关键词}}',
        color: '{{占位图颜色，如 E4DECE/3A3028}}',
        badge: '{{标签，无则留空字符串}}',
        desc: '{{中文简介}}'
      }
```

如果用户提供了真实图片链接（非占位图），则在中文版 JS 里同样使用完整 img URL，并把 color 字段留空或保持默认。

---

## 第六步：提交并推送

```bash
git add collections.html collections-zh.html
git commit -m "Add product: {{英文名}}"
git push origin main
```

---

## 完成后告诉用户

- 新产品已添加到英文版和中文版产品页
- 大约 1-2 分钟后 Vercel 自动部署上线
- 如果图片是占位图，提醒用户替换真实图片后再次运行 `/add-product` 或直接告诉我图片链接
