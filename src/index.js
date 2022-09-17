import './index.css';
import './index.scss';
import countData from './modules/countData.js';
import dataUi from './modules/dataUi.js';
import getData from './modules/getData.js';
import postData from './modules/postLike.js';

countData();

const loadData = async () => {
  const data = await getData();
  data.forEach((item) => {
    dataUi(item);
  });
};

loadData();
// getLike();

window.like = (e) => {
  e.classList.add('liked');

  postData(e.id);
};
