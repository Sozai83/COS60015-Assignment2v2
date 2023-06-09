import React, { useState, useEffect } from "react";
import '../../CSS/layout/navigation.scss';

const withNavList = Component => {
    //Higher order component that used for Navigation components
    const NewComponent = ({navItems, navId, selectNav, ...props})=>{
        const [navList, setNavList] = useState(null);
       
        //Convert navItems to navList JSX
        useEffect(()=> {
            const selectEl = (event)=>{
                selectNav(event);
            }
            const items = navItems ? navItems.map(
                (nav,index) => 
                <li key={index} 
                    data-nav={nav.replace(" ", "")}
                    id={`Nav${nav.replace(" ", "")}`}
                    className={props.default === nav.replace(" ", "") ? 'Active' : ''}
                    onClick={selectEl}
                    >
                        {nav.toUpperCase()}
                    </li>
                ) : <li>No list</li>;
            setNavList(items);
        }, [navItems,props.default,selectNav]);

        //pass the navList JSX and the navID to the Component
         return (
             <Component {...props} nav={{ items: navList, id: navId}}/>
         );      
    }
    return NewComponent;
};

export default withNavList;