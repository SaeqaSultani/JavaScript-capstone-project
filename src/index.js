import './index.css';
import './index.scss';
import countData from './modules/countData';
import dataUi from './modules/dataUi';
import getData from './modules/getData';
import getLike from './modules/getLike';
import postData from './modules/postData';


countData();

const loadData = async () => {
    const data = await getData();
    data.forEach((item) => {
      dataUi(item);
    });
  };
  
  loadData();


window.like = (e) =>{
  
  e.classList.add('liked');

  const numLike = parseInt(1,e.innerHTML);

  // console.log(e.id,typeof numLike);
  const likes =  getLike(e.id);
  console.log(likes);
  // e.innerHTML = likes;

  postData(e.id,numLike);
 
 

 
  
}


