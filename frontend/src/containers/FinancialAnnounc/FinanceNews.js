import React from 'react';
import Classes from './FinanceNews.css';
import MasonryImageList from '../../UI/CardList/CardList';
import Footer from '../../components/Footer/Footer'


const FinanceNews = () => {
    return (
        <div className={Classes.body}>
                <h4 className={Classes.heading4}>Financial Announcements</h4>
                <MasonryImageList />
                <Footer style={{}}/>
            </div>
            
    );
};

export default FinanceNews;