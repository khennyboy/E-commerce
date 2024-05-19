import { useContext, useEffect, useRef, useState } from 'react';
import { datas } from './allComponent';

const ImageFxn = (imageRef, prevRef, nextRef, addOpac ) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [prevNextImage, setPrevNextImage] = useState(null);
    
    let currIndex = useRef(0);
    const alldata = useContext(datas);
    const totalImage = alldata.allItem.length-1 ;
    
    useEffect(() => {
        const ClickedImageDiv = imageRef.current;
        const handlePrev = prevRef.current;
        const handleNext = nextRef.current;
        const handleOpac = addOpac.current;
       
        const children = Array.from(ClickedImageDiv.children);
       
        const handleImageClick = (event) => {
            const clickedElement = event.target;

            if (clickedElement.classList.contains('imageItem')) {
                children.forEach((each) => {
                    each.childNodes[0].classList.remove('addPreveiwEffect');
                });
                setSelectedItem(clickedElement.getAttribute('src'));
                alldata.setCurrItem(clickedElement.getAttribute('src'));
                setPrevNextImage(null);
                clickedElement.classList.add('addPreveiwEffect');
            }
        };

        const handlePrevClick = () => {
            currIndex.current--; 
            if(currIndex.current < 0){
                currIndex.current = totalImage;
            }
           
            handleOpac.classList.add('addOpac');
            setTimeout(() => {
                handleOpac.classList.remove('addOpac');
            }, 500);
            setPrevNextImage(alldata.allItem[currIndex.current].itemsImage);
            alldata.setCurrItem(alldata.allItem[currIndex.current].itemsImage);
            setSelectedItem(null);
        };

        const handleNextClick = () => {
            currIndex.current++; 
            if(currIndex.current > totalImage){
                currIndex.current = 0;
            }
            handleOpac.classList.add('addOpac');
            setTimeout(() => {
                handleOpac.classList.remove('addOpac');
            }, 500);
            setPrevNextImage(alldata.allItem[currIndex.current].itemsImage);
            alldata.setCurrItem(alldata.allItem[currIndex.current].itemsImage);
            setSelectedItem(null);
        };

        handlePrev.addEventListener('click', handlePrevClick);
        handleNext.addEventListener('click', handleNextClick);
        ClickedImageDiv.addEventListener('click', handleImageClick);

        return () => {
            ClickedImageDiv.removeEventListener('click', handleImageClick);
            handlePrev.removeEventListener('click', handlePrevClick);
            handleNext.removeEventListener('click', handleNextClick);
        };
    }, [alldata, totalImage, imageRef, nextRef, prevRef, addOpac]);

    return { selectedItem, prevNextImage, totalImage, currIndex };
};

export default ImageFxn;
