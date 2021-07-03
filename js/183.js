function createTabs(selector) {//탭만드는함수 selector에 .tabs
    const el = document.querySelector(selector);// = .tabs
    const liEls = el.querySelectorAll('ul li');//  = .tabs > ul > li
    const tabContentEl = el.querySelector('.tab_content'); // = tab_content
    const firstTabEl = liEls.item(0).firstElementChild // nth-of-type(1): li
    
    function activate(target) {//.tabs > ul > li 
        const hash = target.hash;//li의 해시태그 
        const anchors = target.closest('ul').querySelectorAll('li a');
        
        Array.from(anchors).forEach(v => v.className = '');//from은 (f,o,o)처럼 다떨어뜨려놓음 forEach문 각각의요소의 클래스를 빈값
        Array.from(tabContentEl.children).forEach(v => v.style.display = 'none');//contents를 전부 안보이게 
        tabContentEl.querySelector(hash).style.display = '';//그중 해시된것만 display none 취소
        target.className = 'active';//클래스를 active로 
    }
    
    const handleHash = () => {
        if (location.hash) {
        const selector = `a[href="${location.hash}"]`;
        activate(document.querySelector(selector));
        } else {
        activate(firstTabEl);
        }
    }
    
    window.addEventListener('hashchange', handleHash);//hash태그가 바뀌면 이벤트를 발생시킬건데 그이벤트는 handleHash이다.

    
    handleHash();
}

createTabs('.tabs');