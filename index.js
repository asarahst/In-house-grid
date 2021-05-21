(function () {

    let slideText = `<div id="slide-info" class="info-hover"><p>Geramos mais oportunidades de negócio, engajamos times e fortalecemos a sua marca com apresentações profissionais para todos os tipos de necessidade.</p></div>`
    let slideBack = `<div id="slide-icon" class="grid-icon"><img src="./images/icones/SVG/Nossas Soluções/icone-apresentacoes.svg" alt="icone-apresentacoes"><p>Apresentações</p></div>`

    let ebookText = `<div class="info-hover"><p> Facilitamos a compreensão de dados e informações complexas c materiais criativos, interativos e intuitivos.</p></div>`
    let ebookBack = `<div id="ebook" class="ebook"><div class="grid-icon"><img src="./images/icones/SVG/Nossas Soluções/icone-e-book.svg" alt="icone-e-book"><p>eBooks e infográficos</p></div></div>`

    let bannerText = `<div class="info-hover"><p> Atraímos a atenção do cliente e melhoramos a conversão de vendas com banners estratégicos para diversos canais (Plataforma Digital, Whatsapp e Redes Sociais).</p></div>`
    let bannerBack = `<div class="grid-icon"><img src="./images/icones/SVG/Nossas Soluções/icone-banner.svg" alt="icone-banner"><p>Banners</p> &nbsp;</div>`

    let idVisualText = `<div class="info-hover"><p>Fortalecemos o branding do seu negócio criando o manual da sua marca e logotipos.</p></div>`
    let idVisualBack = `<div class="grid-icon"><img src="./images/icones/SVG/Nossas Soluções/icone-identidade-visual.svg" alt="icone-identidade-visual"><p>Identidade Visual</p></div>`

    let lpageText = `<div class="info-hover"><p> Melhoramos a comunicação da sua oferta de valor no ambiente digital para gerar mais leads e oportunidades de vendas, criando sites personalizados.</p></div>`
    let lpageBack = `<div class="grid-icon"><img src="./images/icones/SVG/Nossas Soluções/icone-landing-page.svg" alt="icone-landing-page"><p>Landing Page</p></div>`

    let mktText = `<div class="info-hover"><p>Ajudamos seu negócio a criar e a manter o relacionamentocom seus clientes para gerar mais vendas, por meio de emailsatrativos e assertivos em suas campanhas de marketing digital.</p></div>`
    let mktBack = `<div class="grid-icon"><img src="./images/icones/SVG/Nossas Soluções/icone-e-mail.svg" alt="icone-e-mail"><p>E-mail Marketing</p></div>`

    let videoText = `<div class="info-hover"><p> Engajamos seus clientes e funcionários para gerar mais vendas, com diversos formatos de vídeos interativos e dinâmicos para apresentar seu negócio, produtos e iniciativas. É o jeito prático e mensurável de impactar seu público-alvo.</p></div>`
    let videoBack = `<div class="grid-icon"><img src="./images/icones/SVG/Nossas Soluções/icone-video.svg" alt="video"><p>Vídeos</p> &nbsp;</div>`

    let fotosText = `<div class="info-hover"><p> Possibilitamos uma maior conversão de vendas com imagens de qualidade. No digital, a imagem reflete o produto e é a primeira impressão que impacta o cliente.</p></div>`
    let fotosBack = `<div class="grid-icon"><img src="./images/icones/SVG/Nossas Soluções/icone-fotografia.svg" alt="icone-fotografia"><p>Fotografias Profissionais</p></div>`

    $("#slide").mouseenter( function () {
        $(this).empty()
        $(this).append(slideText)
    })

    $('#slide').mouseleave( function () {
        $(this).empty()
        $(this).append(slideBack)
    })

    $("#ebook").mouseenter( function () {
        $(this).empty()
        $(this).append(ebookText)
    })

    $('#ebook').mouseleave( function () {
        $(this).empty()
        $(this).append(ebookBack)
    })

    $("#banner").mouseenter( function () {
        $(this).empty()
        $(this).append(bannerText)
    })

    $('#banner').mouseleave( function () {
        $(this).empty()
        $(this).append(bannerBack)
    })

    $("#idVisual").mouseenter( function () {
        $(this).empty()
        $(this).append(idVisualText)
    })

    $('#idVisual').mouseleave( function () {
        $(this).empty()
        $(this).append(idVisualBack)
    })

    $("#lpage").mouseenter( function () {
        $(this).empty()
        $(this).append(lpageText)
    })

    $('#lpage').mouseleave( function () {
        $(this).empty()
        $(this).append(lpageBack)
    })

    $("#mkt").mouseenter( function () {
        $(this).empty()
        $(this).append(mktText)
    })

    $('#mkt').mouseleave( function () {
        $(this).empty()
        $(this).append(mktBack)
    })

    $("#video").mouseenter( function () {
        $(this).empty()
        $(this).append(videoText)
    })

    $('#video').mouseleave( function () {
        $(this).empty()
        $(this).append(videoBack)
    })

    $("#fotos").mouseenter( function () {
        $(this).empty()
        $(this).append(fotosText)
    })

    $('#fotos').mouseleave( function () {
        $(this).empty()
        $(this).append(fotosBack)
    })
})()
