document.addEventListener('DOMContentLoaded', (event) => {
    let hamico_div = document.querySelector(".header_hamIco");
    let line_div = document.querySelector(".header_line");
    let headerMenu__div = document.querySelector(".header_menu");
    let logosignPathi__div = document.querySelector(".header_logosignPathi");
    let logosignPathii__div = document.querySelector(".header_logosignPathii");
    let header_logotype__g = document.querySelector(".header_logotype");
    let body__body = document.querySelector("body");
    
    hamico_div.addEventListener("click" , togglemenu);
    let showMenu = false;
    function togglemenu(){
        if (!showMenu){
            line_div.classList.add('header_line--open');
            headerMenu__div.classList.add('header_menu--open');
            logosignPathi__div.classList.add('header_logosignPathi--open');
            logosignPathii__div.classList.add('header_logosignPathii--open');
            header_logotype__g.classList.add('header_logotype--open');
            //body__body.style.overflow = "hidden";
            showMenu = true;
        }else {
            line_div.classList.remove('header_line--open');
            headerMenu__div.classList.remove('header_menu--open');
            logosignPathi__div.classList.remove('header_logosignPathi--open');
            logosignPathii__div.classList.remove('header_logosignPathii--open');
            header_logotype__g.classList.remove('header_logotype--open');
            //body__body.style.overflow = "auto";
            showMenu = false;
        }   
    }
  });