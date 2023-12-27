import '/src/pages/product/product.css';
import { tiger, insertLast } from '/src/lib';

async function renderProduct() {
  const response = await tiger.get(
    'http://127.0.0.1:8090/api/collections/products/records'
  );

  const userData = response.data.items;

  userData.forEach((item) => {
    const template = `
      <li class="product-item">
        <a href="/">
          <figure>
            <img src="/src/assets/thumb.jpg" alt="" />
          </figure>
          <span class="brand">링서울</span>
          <span class="desc">[29CM단독]_[15%] handmade wool trench coat(5color)</span>
          <span class="price">399,000</span>
          <div>
            <span class="discount">15%</span>
            <span class="real-price">250,000원</span>
          </div>
        </a>
      </li>
    `;
    // insertLast('.container', template);
  });
}


renderProduct();
