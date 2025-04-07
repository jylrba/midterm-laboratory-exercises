document.querySelectorAll('#toggle, #x-toggle').forEach(item => item.addEventListener("click", () => document.querySelector('#nav').style.display = item.id === 'toggle' ? 'flex' : 'none'));

document.querySelectorAll('.home, .contact, .menu, .about').forEach(item => {
    item.addEventListener("click", () => document.querySelector('#nav').style.display = 'none');
});

// $(document).ready(function () {
//     $('.mmenu').hide(); 
//     $('.link').css('font-weight', '550');
//     $('.link').css('background-color', 'transparent');

//     $('.link').click(function () {
//         $('.link').css('font-weight', '550');
//         $('.link').css('background-color', 'transparent');
//         $(this).css('font-weight', '600'); 
//         $(this).css('background-color', '#fff');

//         $('.mmenu').hide();
//         $('.sMmenu').hide();
//         $('#' + $(this).attr('data')).fadeIn();
//     });
// });


