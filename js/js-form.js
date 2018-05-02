var formLink = document.querySelector(".buy-btn");
var formCopy = document.querySelector(".copy-btn");
var popup = document.querySelector(".form-box");
var closeForm = document.querySelector(".close-link");
var formFooter = document.querySelector(".footer-btn");

        formLink.addEventListener("click", function(evt){ 
            evt.preventDefault();
        popup.classList.add("visual-form");
        document.body.style.overflow = 'hidden';
        document.querySelector("input").focus();
        });
        formCopy.addEventListener("click", function(evt){ 
            evt.preventDefault();
        popup.classList.add("visual-form");
        document.body.style.overflow = 'hidden';
        document.querySelector("input").focus();
        });
        formFooter.addEventListener("click", function(evt){ 
            evt.preventDefault();
        popup.classList.add("visual-form");
        document.body.style.overflow = 'hidden';
        document.querySelector("input").focus();
        });
        
        closeForm.addEventListener("click", function(evt){ evt.preventDefault();
        popup.classList.remove("visual-form");
        document.body.style.overflowY = 'auto'; 
        document.querySelector('input').setAttribute('autofocus', 'autofocus');
        });
        window.addEventListener("keydown", function(evt){ if (evt.keyCode === 27){ 
            if (popup.classList.contains("visual-form")){
                popup.classList.remove("visual-form"); 
                document.body.style.overflowY = 'auto'; 
            } 
        } 
    }); 