document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;
            document.querySelectorAll(".form-control, .form-check-input").forEach(input => {
                let errorDiv = input.nextElementSibling;
                if ((input.type === "checkbox" && !input.checked) || input.value.trim() === "") {
                    errorDiv.classList.remove("d-none");
                    isValid = false;
                } else 
                    errorDiv.classList.add("d-none");
                
            });
            if (isValid) 
                document.getElementById("successAlert").classList.remove("d-none");
            
});
        
$(document).ready(function () {
    $('.card-body').hide();
    $('.card-img-top').hover(
        function() {
            $(this).siblings('.card-body').fadeIn();
        },

        function() {}
    );

    $('.card-body').hover(
        function() {},

        function() {
            $(this).fadeOut();
        }
    );
})