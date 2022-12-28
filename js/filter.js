console.log('Hello!');
import { galleryItems } from './gallery-items.js';
// Крок 1 - HTML розмітка
const galleryEl = document.querySelector('.works');
const galleryMarkup = galleryItems
  .map(
    ({ smallImgName, mediumImgName, bigImgName, explanation, title, type }) =>
      `<li class="works__item">
              <a class="works__link" href="#">
                <div class="works__thumb">
                  <picture>
                    <!-- Desktop -->
                    <source
                      media="(min-width: 1200px)"
                      srcset="
                        ./images/portfolio/desktop/${smallImgName}.webp    1x,
                        ./images/portfolio/desktop/${mediumImgName}.webp 2x,
                        ./images/portfolio/desktop/${bigImgName}.webp 3x
                      "
                      type="image/webp"
                    />
                    <source
                      media="(min-width: 1200px)"
                      srcset="
                        ./images/portfolio/desktop/${smallImgName}.jpg    1x,
                        ./images/portfolio/desktop/${mediumImgName}.jpg 2x,
                        ./images/portfolio/desktop/${bigImgName}.jpg 3x
                      "
                      type="image/jpeg"
                    />
                    <!-- Tablet -->
                    <source
                      media="(min-width: 768px)"
                      srcset="
                        ./images/portfolio/tablet/${smallImgName}.webp    1x,
                        ./images/portfolio/tablet/${mediumImgName}.webp 2x,
                        ./images/portfolio/tablet/${bigImgName}.webp 3x
                      "
                      type="image/webp"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcset="
                        ./images/portfolio/tablet/${smallImgName}.jpg    1x,
                        ./images/portfolio/tablet/${mediumImgName}.jpg 2x,
                        ./images/portfolio/tablet/${bigImgName}.jpg 3x
                      "
                      type="image/jpeg"
                    />
                    <!-- Phone -->
                    <source
                      media="(max-width: 767px)"
                      srcset="
                        ./images/portfolio/mobile/${smallImgName}.webp    1x,
                        ./images/portfolio/mobile/${mediumImgName}.webp 2x,
                        ./images/portfolio/mobile/${bigImgName}.webp 3x
                      "
                      type="image/webp"
                    />
                    <source
                      media="(max-width: 767px)"
                      srcset="
                        ./images/portfolio/mobile/${smallImgName}.jpg    1x,
                        ./images/portfolio/mobile/${mediumImgName}.jpg 2x,
                        ./images/portfolio/mobile/${bigImgName}.jpg 3x
                      "
                      type="image/jpeg"
                    />
                    <img
                      src="./images/portfolio/desktop/${smallImgName}.jpg"
                      alt="зображення вебсайту"
                      class="works__img"
                    />
                  </picture>
                  <div class="works__overlay">
                    <p class="works__explanation">
                      ${explanation}
                    </p>
                  </div>
                </div>
                <div class="works__shadow works__shadow--huge">
                  <h2 class="works__title">${title}</h2>
                  <p class="works__text">${type}</p>
                </div>
              </a>
            </li>`
  )
  .join('');

galleryEl.innerHTML = galleryMarkup;

// Опрацювання кліку

// const buttonsList = document.querySelector('.buttons');
// const worksList = document.querySelectorAll('.works__item');
// buttonsList.addEventListener('click', onBtnClick);

// function onBtnClick(evt) {
//   if (!evt.target.classList.contains('buttons__btn')) {
//     return;
//   }

//   // worksList.filter((work));
//   console.log(worksList[0]);
//   //   console.log(worksList[0].querySelector('.works__text'));
// }
