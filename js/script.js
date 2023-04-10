$(document).ready(() => {
  const modal = $('.modal-picture');
  const modalTitle = $('.modal-picture__title');
  const modalPicture = $('.modal-picture img')
  const modalDownloadUrl = $('.modal-picture a[download]');
  const modalGithubUrl = $('.modal-picture a[target]');
  const modalVideo = $('.modal-picture__video'); 
  const cross = $('.modal-picture__cross');
  const body = $('body');
  const crossContact = $('.popup-contact__cross');
  const burger = $('.burger');
  const navigation = $('.nav');
  const navLinks = $('.nav__link');
  const contacts = $('.header__contacts').clone();
  const skillsBtn = $('.skills__btn');
  const fashion = {
    title: 'Интернет магазин модной одежды Fashion',
    alt: 'картина на сайт fashion',
    urls: {
      pic: '/img/Fashion-full.webp',
      github: 'https://github.com/kamkimade/fashion.git',
      download: 'https://github.com/kamkimade/fashion/archive/refs/heads/master.zip'
    }
  }

  const plant = {
    title: 'Адаптивная страница Plant',
    alt: 'картина на сайт plant',
    urls: {
      pic: '/img/plants-landing-full.webp',
      github: 'https://github.com/kamkimade/plantsAdaptive.git',
      download: 'https://github.com/kamkimade/plantsAdaptive/archive/refs/heads/master.zip'
    }
  }

  const luxure = {
    title: 'Анимация на чистом CSS',
    alt: 'картина на сайт Luxure',
    urls: {
      video: '/img/Luxury.mp4',
      github: 'https://github.com/kamkimade/Travel.git',
      download: 'https://github.com/kamkimade/Travel/archive/refs/heads/master.zip'
    }
  }

  function toggleClassElem() {
    $('.burger__line-top').toggleClass('active-top')
    $('.burger__line-bottom').toggleClass('active-bottom')
    $('.burger__line-center').toggleClass('active-center')
    body.toggleClass('active-overflow')
    navigation.toggleClass('active-display')
  }

  burger.on('click', function () {

    toggleClassElem();
  })
  
  navLinks.on('click', function() {
    toggleClassElem();
  })

  skillsBtn.on('click', function() {
    $('.skills__tools-item:nth-child(n+4)').each((idx, elem) => {
      $(elem).css('display', 'block')
    })
    $(this).css('display', 'none')
  })

  crossContact.on('click', function () {
    popupContact.animate({'top': '-100%'}, 600, function () {
      popupContact.hide();
      $('body').css({'padding-right': ''})
      body.removeClass('lock');

    })
    // $('.popup-contact').hide()
    // $('body').css({'padding-right': ''})
    // body.removeClass('lock');
  })

  $('a[href^="#"').on('click', function () {
    let _href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(_href).offset().top + 'px'
    })
    return false;
  })

  $('#modal-pic01').on('click', function () {
    body.addClass('lock')
    modalTitle.text(fashion.title); 
    modalPicture.attr('src', fashion.urls.pic);
    modalPicture.attr('alt', fashion.alt);
    modalDownloadUrl.attr('download', fashion.urls.download);
    modalGithubUrl.attr('href', fashion.urls.github);
    modal.show()
  })

  $('#modal-pic02').on('click', function () {
    body.addClass('lock')
    modalTitle.text(plant.title);
    modalPicture.attr('src', plant.urls.pic);
    modalPicture.attr('alt', plant.alt);
    modalDownloadUrl.attr('download', plant.urls.download);
    modalGithubUrl.attr('href', plant.urls.github); 
    modal.show()
  })

  $('#modal-video').on('click', function () {
    body.addClass('lock')
    modalTitle.text(luxure.title);
    $('.modal-picture__img img').hide();
    $('.modal-picture__img').css({'overflow-y': 'hidden'});
    modalVideo.attr('src', luxure.urls.video);
    modalVideo.show();
    modalDownloadUrl.attr('download', luxure.urls.download);
    modalGithubUrl.attr('href', luxure.urls.github); 
    modal.show()
  })

  cross.on('click', function () {
    body.removeClass('lock')
    $('.modal-picture__img img').show();
    $('.modal-picture__img').css({'overflow-y': 'auto'});
    modalTitle.text('');
    modalPicture.attr('src', '');
    modalPicture.attr('alt', '');
    modalDownloadUrl.attr('download', '');
    modalGithubUrl.attr('href', ''); 
    modalVideo.hide();
    modal.hide()
  })
})

