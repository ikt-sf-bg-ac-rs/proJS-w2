window.addEventListener('load', watermarkF());

//programWatermarkSadrzaj => proJS
//let programWatermarkSadrzaj = document.querySelector('.programWatermarkSadrzaj');
//programWatermarkSadrzaj.addEventListener('load', watermarkF());

function watermarkF(){

    let proJS = document.createElement('div');
    document.body.appendChild(proJS);

    proJS.style.width = '70%';
    proJS.style.margin = '0 auto 0 auto';

    //a.target.removeEventListener(a.type, arguments.callee);
    let txtProJS = document.createElement('p');
    proJS.appendChild(txtProJS);
    txtProJS.textContent = 'Watermark tehnike | JavaScript';
    txtProJS.style.fontWeight = 'bold'; 
    txtProJS.textContent = 'Watermark techniques | JavaScript';
    
    //proJS.textContent = 'Watermark techniques | JavaScript'; 
    let opisA = document.createElement('p');

    /*
    let jezikSR = document.createElement('p');
    jezikSR.textContent = 'SR';
    proJS.appendChild(jezikSR);

    let jezikEN = document.createElement('p');
    jezikEN.textContent = 'EN';
    proJS.appendChild(jezikEN);
    */

    //opisA.textContent = 'Prikaz menija za dodavanje watermarka: ';
    opisA.textContent = 'Show watermark insertion menu: ';
    proJS.appendChild(opisA);

    //let meniA = document.createElement('class');
    let slikawA = document.createElement('img');
    let divSlikawA = document.createElement('div');
    proJS.appendChild(divSlikawA);

    divSlikawA.appendChild(slikawA);

    slikawA.src = 'ico/meniA.png';
    slikawA.style.padding = '0.5em';
    slikawA.style.border = '2px';
    slikawA.style.color = 'rgb(47, 38, 173)';
    slikawA.style.width = '2em';
    slikawA.style.borderRadius = '10px';
    slikawA.style.margin = '0 auto 0 auto';

    slikawA.addEventListener('mouseover', () => {
        slikawA.style.borderStyle = 'dotted';
    });

    slikawA.addEventListener('mouseout', () => {
        slikawA.style.borderStyle = 'dashed';
    });

    slikawAsl = new Image();

    //slikaAf()
    function slikaAf(a){

        a.target.removeEventListener(a.type, arguments.callee);

        /*divA */
        let divA = document.createElement('div');
        proJS.appendChild(divA);

        let wA = document.createElement('p');
        //wA.textContent = 'Unesite originalnu sliku: ';
        wA.textContent = 'Insert the original image: ';
        divA.appendChild(wA);

        let ulazA = document.createElement('input');
        ulazA.type = 'file';
        divA.appendChild(ulazA);

        let whrA = document.createElement('hr');
        whrA.width = 300;
        divA.appendChild(whrA);

        //let
        let wKanvasA = document.createElement('canvas');
        divA.appendChild(wKanvasA);

        //let
        let ctxWkanvasA = wKanvasA.getContext('2d');
    
        ulazA.addEventListener('change', function(){
            
            if(this.files && this.files[0]){

                slikawAsl.src = URL.createObjectURL(this.files[0]);

                slikawAsl.addEventListener('load', function(){

                    if(slikawAsl.width >= 1920){

                        wKanvasA.width = slikawAsl.width;
                        wKanvasA.height = slikawAsl.height;

                    } else {

                        wKanvasA.width = slikawAsl.width;
                        wKanvasA.height = slikawAsl.height;

                    }

                    //ctxWkanvasA.clearRect(0, 0, wKanvasA.width, wKanvasA.height);
                    ctxWkanvasA.drawImage(slikawAsl, 0, 0, wKanvasA.width, wKanvasA.height);

                    //Novo 7.10.2022. Pet.
                    //Prikaz podataka o slici
                    let whrWrez = document.createElement('hr');
                    whrWrez.width = 300;
                    divA.appendChild(whrWrez);

                    let wPod = document.createElement('p');
                    wPod.textContent = 'Osnovni podaci o slici:';
                    wPod.textContent = 'Basic image data:';
                    wPod.style.fontWeight = 'bold';
                    divA.appendChild(wPod);

                    let wRez = document.createElement('p');
                    wRez.textContent = 'Rezolucija ulazne slike: ';
                    wRez.textContent = 'Input image resolution: ';
                    divA.appendChild(wRez);

                    let inpWrez = document.createElement('input');
                    inpWrez.value = `${wKanvasA.width} x ${wKanvasA.height} px`;
                    divA.appendChild(inpWrez);

                    let txtWbrPx = document.createElement('p');
                    txtWbrPx.textContent = 'Broj piksela ulazne slike: ';
                    txtWbrPx.textContent = 'Number of pixels of the input image: ';
                    divA.appendChild(txtWbrPx);

                    let inpWbrPx = document.createElement('input');
                    inpWbrPx.value = Number(wKanvasA.width * wKanvasA.height);
                    divA.appendChild(inpWbrPx);

                    /////////////////////////////

                    //Novo
                    let wA3 = document.createElement('p');
                    wA3.textContent = 'Vrednosti piksela ulazne slike: ';
                    wA3.textContent = 'Input image pixel values: ';
                    divA.appendChild(wA3);

                    //let
                    pikseliWA = document.createElement('textarea');
                    pikseliWA.style.border = '2px dotted rgb(47, 38, 173)';
                    pikseliWA.style.borderRadius = '10px';
                    divA.appendChild(pikseliWA);

                    let whrA6 = document.createElement('hr');
                    whrA.width = 300;
                    divA.appendChild(whrA6); 

                    let pikseliWApikseli = ctxWkanvasA.getImageData(0, 0, wKanvasA.width, wKanvasA.height);
                    //console.log(pikseliWApikseli.data);

                    //Globalni niz - bez let
                    pikseliWAniz = new Array();

                    for(let i = 0; i < pikseliWApikseli.data.length; i++){
                        pikseliWAniz.push(pikseliWApikseli.data[i]);
                    };

                    pikseliWA.value = pikseliWAniz; 

                    let txtWbrPxWA = document.createElement('p');
                    txtWbrPxWA.textContent = 'Ukupno piksela: ';
                    txtWbrPxWA.textContent = 'Total pixels: ';
                    divA.appendChild(txtWbrPxWA);

                    let wBrPxWA = document.createElement('input');
                    wBrPxWA.value = Number(pikseliWAniz.length / 4);
                    divA.appendChild(wBrPxWA);

                    //a
                    let wA4 = document.createElement('p');
                    //Novo | 14.3.2022. : test 512
                    wA4.textContent = 'Vrednosti prvih 512 piksela ulazne slike: ';
                    wA4.textContent = 'Values the first 512 pixels of the input image: ';
                    divA.appendChild(wA4);

                    //let
                    pikseliWA512 = document.createElement('textarea');
                    pikseliWA512.style.border = '2px dotted rgb(47, 38, 173)';
                    pikseliWA512.style.borderRadius = '10px';
                    divA.appendChild(pikseliWA512);

                    let whrA7 = document.createElement('hr');
                    whrA7.width = 300;
                    divA.appendChild(whrA7); 

                    let pikseliWApikseli512 = ctxWkanvasA.getImageData(0, 0, wKanvasA.width, wKanvasA.height);
                    
                    //Globalni niz - bez let
                    pikseliWAniz512 = new Array();

                    //Novi test: 1024 umesto 256 => PSNR(1024) = 42dB PSNR(256) = 56
                    //Novi test #2 128 PSNR(128) = 61.77 dB
                    //Novi test #3 64 PSNR(64) = 66.55 dB
                    
                    //Novooo: 15.5.2022. | Test 64 => 512
                    for(let i = 0; i < 512; i++){
                        pikseliWAniz512.push(pikseliWApikseli512.data[i]);
                    };

                    pikseliWA512.value = pikseliWAniz512; 

                    let txtPikseliWAn = document.createElement('p');
                    txtPikseliWAn.textContent = 'Broj elemenata (piksela) ulaznog signala: ';
                    txtPikseliWAn.textContent = 'Number of input signal elements (pixels): ';
                    divA.append(txtPikseliWAn);

                    let inpPikseliWAn = document.createElement('input');
                    inpPikseliWAn.value = pikseliWAniz512.length;
                    divA.appendChild(inpPikseliWAn);

                    let whrA1 = document.createElement('hr');
                    whrA1.width = 300;
                    divA.appendChild(whrA1);

                    //console.log(pikseliWAniz64);

                    //////////
                    /////////
                    //Aca 2.4.4 24.3.2022. Čet. | Test #1

                    let btnWnovaSlika = document.createElement('button');
                    divA.appendChild(btnWnovaSlika);
            
                    btnWnovaSlika.textContent = 'Nova slika';
                    btnWnovaSlika.textContent = 'New image';
            
                    btnWnovaSlika.addEventListener('click', () => {
            
                        ulazA.value = '';
                        pikseliWA.value = '';
                        pikseliWA64.value = '';
                        ctxWkanvasA.clearRect(0, 0, wKanvasA.width, wKanvasA.height);
            
                        pkA.value = '';
            
                    });
            
                     /*divA */

                    //Obrisan veliki deo koda
                    //Novo 15.5.2022. 
                    /* => divBPSK */
                    let divBPSK = document.createElement('div');
                    proJS.appendChild(divBPSK);

                    let whrBPSK = document.createElement('hr');
                    whrBPSK.width = 600;
                    divBPSK.appendChild(whrBPSK);

                    let txtBPSK = document.createElement('p');
                    txtBPSK.textContent = 'BPSK modulacija';
                    txtBPSK.textContent = 'BPSK modulation';
                    txtBPSK.style.fontWeight = 'bold';
                    divBPSK.appendChild(txtBPSK);

                    let whrBPSKa = document.createElement('hr');
                    whrBPSKa.width = 600;
                    divBPSK.appendChild(whrBPSKa);

                    let txtBPSKa = document.createElement('p');
                    txtBPSKa.textContent = ' Ulazni signal (za BPSK): ';
                    txtBPSKa.textContent = ' Input signal (for BPSK): ';
                    divBPSK.appendChild(txtBPSKa);

                    let BPSKinpS = document.createElement('textarea');
                    BPSKinpS.value = pikseliWAniz512;
                    divBPSK.appendChild(BPSKinpS); 

                    //1. kanvas - canvasBPSKa
                    let canvasBPSKa = document.createElement('canvas');
                    divBPSK.appendChild(canvasBPSKa);
                    
                    canvasBPSKa.style.width = '600px';

                    const ctxBPSKa = canvasBPSKa.getContext('2d');
                    const BPSKaGraf = new Chart(ctxBPSKa, {
                    type: 'bar',
                    data: {
                        labels: pikseliWAniz512,
                        datasets: [{
                            //label: 'Ulazni signal (za BPSK)',
                            label: 'Input signal (for BPSK)',
                            data: pikseliWAniz512,
                            backgroundColor: [
                               'rgba(47, 38, 173, 1)',
                               'rgba(47, 38, 173, 1)',
                               'rgba(47, 38, 173, 1)'
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });

                    //BPSKaGraf.width = 500;

                    let txtBPSKaRZ = document.createElement('p');
                    txtBPSKaRZ.textContent = 'Pretvaranje niza ulaznog signala (za BPSK) u RZ niz: ';
                    txtBPSKaRZ.textContent = 'Convert input signal (for BPSK) array to RZ array: ';
                    divBPSK.appendChild(txtBPSKaRZ);

                    let BPSKaRZ = document.createElement('textarea');
                    divBPSK.appendChild(BPSKaRZ);

                    BPSKaRZarray = new Array();
                    BPSKaRZarray = pikseliWAniz512.map(a => {

                        if(a > 0){
                            return 1;
                        } else if (a <= 0){
                            return 0;
                        }

                    });

                    BPSKaRZ.value = BPSKaRZarray;

                    //2. kanvas - canvasBPSKaRZ
                    let canvasBPSKaRZ = document.createElement('canvas');
                    divBPSK.appendChild(canvasBPSKaRZ);
                    
                    canvasBPSKaRZ.style.width = '600px';

                    const ctxBPSKaRZ = canvasBPSKaRZ.getContext('2d');
                    const BPSKaRZgraf = new Chart(ctxBPSKaRZ, {
                    type: 'bar',
                    data: {
                        labels: BPSKaRZarray,
                        datasets: [{
                            //label: 'Ulazni signal (za BPSK) | RZ niz',
                            label: 'Input signal (for BPSK) | RZ array',
                            data: BPSKaRZarray,
                            backgroundColor: [
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)'
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });

                    let txtBPSKaNRZ = document.createElement('p');
                    txtBPSKaNRZ.textContent = 'Pretvaranje RZ niza u NRZ niz: ';
                    txtBPSKaNRZ.textContent = 'Convert RZ array to NRZ array: ';
                    divBPSK.appendChild(txtBPSKaNRZ);

                    let BPSKaNRZ = document.createElement('textarea');
                    divBPSK.appendChild(BPSKaNRZ);
                    
                    BPSKaNRZarray = new Array();
                    BPSKaNRZarray = BPSKaRZarray.map(a => {

                        if(a > 0){
                            return 1;
                        } else if(a <=0){
                            return -1;
                        }
                    
                    });

                    BPSKaNRZ.value = BPSKaNRZarray;

                    //3. kanvas - canvasBPSKaNRZ
                    let canvasBPSKaNRZ = document.createElement('canvas');
                    divBPSK.appendChild(canvasBPSKaNRZ);
                    
                    canvasBPSKaNRZ.style.width = '600px';

                    const ctxBPSKaNRZ = canvasBPSKaNRZ.getContext('2d');
                    const BPSKaNRZgraf = new Chart(ctxBPSKaNRZ, {
                    type: 'bar',
                    data: {
                        labels: BPSKaNRZarray,
                        datasets: [{
                            //label: 'Ulazni signal (za BPSK) | NRZ niz',
                            label: 'Input signal (for BPSK) | NRZ array',
                            data: BPSKaNRZarray,
                            backgroundColor: [
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)'
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });

                    //Generisanje nosioca
                    let txtNosilac = document.createElement('p');
                    txtNosilac.textContent = 'Generisanje signala nosioca: ';
                    txtNosilac.textContent = 'Generating the carrier signal: ';
                    divBPSK.appendChild(txtNosilac);

                    let nosilacV = document.createElement('textarea');
                    divBPSK.appendChild(nosilacV);
                    
                    f = 5;
                    T = 1;
                    t = 0.05;
                    TT = 180; 
                    nn = (2 * Math.PI) / TT;
                    tta = new Array();
                    tt = new Array();

                    //f
                    let txtNosilac_f = document.createElement('p');
                    txtNosilac_f.textContent = 'Frekvencija nosioca: ';
                    txtNosilac_f.textContent = 'Carrier frequency: ';

                    divBPSK.appendChild(txtNosilac_f);

                    let inpNosilac_f = document.createElement('input');
                    inpNosilac_f.value = f;
                    divBPSK.appendChild(inpNosilac_f);

                    let hrNosilac_f = document.createElement('hr');
                    hrNosilac_f.width = 300;
                    divBPSK.appendChild(hrNosilac_f);

                    //T
                    let txtNosilac_TT = document.createElement('p');
                    txtNosilac_TT.textContent = 'Period: ';

                    divBPSK.appendChild(txtNosilac_TT);

                    let inpNosilac_TT = document.createElement('input');
                    inpNosilac_TT.value = TT;
                    divBPSK.appendChild(inpNosilac_TT);

                    let hrNosilac_TT = document.createElement('hr');
                    hrNosilac_TT.width = 300;
                    divBPSK.appendChild(hrNosilac_TT);

                    //phase
                    let txtNosilac_PI = document.createElement('p');
                    txtNosilac_PI.textContent = 'Faza [0, 2 Pi]: ';
                    txtNosilac_PI.textContent = 'Phase [0, 2 Pi]: ';

                    divBPSK.appendChild(txtNosilac_PI);

                    let inpNosilac_PI = document.createElement('input');
                    inpNosilac_PI.value = `[0, 2Pi]`;
                    divBPSK.appendChild(inpNosilac_PI);

                    let hrNosilac_PI = document.createElement('hr');
                    hrNosilac_PI.width = 300;
                    divBPSK.appendChild(hrNosilac_PI);

                    //dt
                    let txtNosilac_dt = document.createElement('p');
                    txtNosilac_dt.textContent = 'Delta_t: ';

                    divBPSK.appendChild(txtNosilac_dt);

                    let inpNosilac_dt = document.createElement('input');
                    inpNosilac_dt.value = nn;
                    divBPSK.appendChild(inpNosilac_dt);

                    let hrNosilac_dt = document.createElement('hr');
                    hrNosilac_dt.width = 300;
                    divBPSK.appendChild(hrNosilac_dt);

                    for(let i = 0; i < TT; i+= nn){
                        tta.push(i);
                    }

                    console.log('tta: ', tta);

                    tt = tta.slice(1, 256 * 2 + 1);
                    console.log('tt: ', tt);

                    //dt
                    let txtNosilac_t = document.createElement('p');
                    txtNosilac_t.textContent = 'Vrednosti parametra t: ';
                    txtNosilac_t.textContent = 'Values of the "t" parameter: ';
                    divBPSK.appendChild(txtNosilac_t);
                    
                    let hrNosilac_t = document.createElement('hr');
                    hrNosilac_t.width = 300;
                    divBPSK.appendChild(hrNosilac_t);
                    
                    let nosilac_t_d_v= document.createElement('textarea');
                    nosilac_t_d_v.value = tt;
                    divBPSK.appendChild(nosilac_t_d_v);

                    let hrNosilac_tA = document.createElement('hr');
                    hrNosilac_tA.width = 300;
                    divBPSK.appendChild(hrNosilac_tA);
                    
                    let txtNosilac_t_d = document.createElement('p');
                    txtNosilac_t_d.textContent = 'Broj vrednosti parametra t: ';
                    txtNosilac_t_d.textContent = 'Number of "t" parameter values: ';
                    divBPSK.appendChild(txtNosilac_t_d);

                    let inpNosilac_t_d = document.createElement('input');
                    inpNosilac_t_d.value = tt.length;
                    divBPSK.appendChild(inpNosilac_t_d);

                    let hrNosilac_tA2 = document.createElement('hr');
                    hrNosilac_tA2.width = 300;
                    divBPSK.appendChild(hrNosilac_tA2);

                    nosilac = new Array();
                    nosilac = BPSKaNRZarray.map((x, y) => {

                        //return x * Math.sqrt(2/TT) * Math.cos(2 * Math.PI * f * tt[y]);
                        return x * Math.cos(2 * Math.PI * f * tt[y]);

                    });

                    nosilacV.value = nosilac;
                    //console.log('nosilac: ', nosilac);
                    console.log('carrier: ', nosilac);

                    //4. kanvas - canvasNosilac
                    let canvasNosilac = document.createElement('canvas');
                    divBPSK.appendChild(canvasNosilac);
                    
                    canvasNosilac.style.width = '600px';

                    const ctxNosilac = canvasNosilac.getContext('2d');
                    const nosilacGraf = new Chart(ctxNosilac, {
                    type: 'bar',
                    data: {
                        labels: nosilac,
                        datasets: [{
                            //label: 'Nosilac za BPSK modulaciju',
                            label: 'Carier for BPSK modulation',
                            data: nosilac,
                            backgroundColor: [
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)'
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });

                    //BPSK signala
                    let txtBPSKmod= document.createElement('p');
                    txtBPSKmod.textContent = 'BPSK modulacija ulaznog signala:  ';
                    txtBPSKmod.textContent = 'BPSK modulation of input signal:  ';
                    divBPSK.appendChild(txtBPSKmod);

                    let BPSKmodV = document.createElement('textarea');
                    divBPSK.appendChild(BPSKmodV);

                    BPSKmod = new Array();
                    BPSKmod = BPSKaNRZarray.map((a, b) => a * nosilac[b]);
                    BPSKmodV.value = BPSKmod;

                    console.log('BPSKmod: ', BPSKmod);

                    //5. canvas - canvasBPSKmod
                    let canvasBPSKmod = document.createElement('canvas');
                    divBPSK.appendChild(canvasBPSKmod);
                    
                    canvasBPSKmod.style.width = '600px';

                    const ctxBPSKmod = canvasBPSKmod.getContext('2d');
                    const BPSKmodGraf = new Chart(ctxBPSKmod, {
                    type: 'bar',
                    data: {
                        labels: BPSKmod,
                        datasets: [{
                            //label: 'BPSK modulisani (ulazni) signal',
                            label: 'BPSK modulated (input) signal',
                            data: BPSKmod,
                            backgroundColor: [
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)' 
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });
                    
                    canvasBPSKmod.style.width = 500;
                    canvasBPSKmod.style.height = 500;

                    //FHSS kod za širenje
                    let txtFHSSkod = document.createElement('p');
                    txtFHSSkod.textContent = 'FHSS kod: ';
                    txtFHSSkod.textContent = 'FHSS code: ';
                    divBPSK.appendChild(txtFHSSkod);

                    let FHSSkodV = document.createElement('textarea');
                    divBPSK.appendChild(FHSSkodV);

                    //Kod za širenje
                    ///f1
                    const cA = (x) => {
                        return Math.cos(2 * (Math.PI / 8) * x * f)
                    };

                    //f2
                    const cB = (x) => {
                        return Math.cos(2 * (Math.PI / 17) * x * f)
                    };

                    //f3
                    const cC = (x) => {
                        return Math.cos(2 * (Math.PI / 35) * x * f)
                    };

                    //f4
                    const cD = (x) => {
                        return Math.cos(2 * (Math.PI / 89) * x * f)
                    };

                    let cAn = new Array();
                    let cBn = new Array();
                    let cCn = new Array();
                    let cDn = new Array();

                    //cAn
                    //16 => 64
                    for(let i = 0; i < (64 / 4) * 8; i++){
                        cAn.push(cA(i));
                    }

                    //cBn
                    for(let i = 0; i < (64 / 4) * 8; i++){
                        cBn.push(cB(i));
                    }

                    //cCn
                    for(let i = 0; i < (64 / 4) * 8; i++){
                        cCn.push(cC(i));
                    }

                    //cDn
                    for(let i = 0; i < (64 / 4) * 8; i++){
                        cDn.push(cD(i));
                    }

                    console.log('cAn: ', cAn);
                    console.log('cBn: ', cBn);
                    console.log('cCn: ', cCn);
                    console.log('cDn: ', cDn);

                    let FHSSkod = new Array();
                    FHSSkod = [].concat(cAn, cBn, cCn, cDn);

                    FHSSkodV.value = FHSSkod;
                    //console.log('FHSS kod: ', FHSSkod);
                    console.log('FHSS code: ', FHSSkod);

                    //6. kanvas - canvasFHSSkod
                    let canvasFHSSkod = document.createElement('canvas');
                    divBPSK.appendChild(canvasFHSSkod);
                    
                    canvasFHSSkod.style.width = '600px';

                    const ctxFHSSkod = canvasFHSSkod.getContext('2d');
                    const FHSSkodGraf = new Chart(ctxFHSSkod, {
                    type: 'bar',
                    data: {
                        labels: FHSSkod,
                        datasets: [{
                            //label: 'FHSS kod',
                            label: 'FHSS code',
                            data: FHSSkod,
                            backgroundColor: [
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)' 
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });

                    //BPSK modulacija sa FHSS širenjem spektra
                    let txtBPSK_FHSS = document.createElement('p');
                    txtBPSK_FHSS.textContent = 'BPSK modulisani (ulazni) signal sa FHSS proširenim spektrom: ';
                    txtBPSK_FHSS.textContent = 'BPSK modulated (input) signal with FHSS spread spectrum: ';
                    divBPSK.appendChild(txtBPSK_FHSS);

                    let BPSK_FHSSv = document.createElement('textarea');
                    divBPSK.appendChild(BPSK_FHSSv);

                    BPSK_FHSS = new Array();
                    BPSK_FHSS = BPSKmod.map((x, y) => {
                        return x * FHSSkod[y];
                    });

                    BPSK_FHSSv.value = BPSK_FHSS;

                    //7. kanvas - canvasBPSK_FHSS
                    let canvasBPSK_FHSS = document.createElement('canvas');
                    divBPSK.appendChild(canvasBPSK_FHSS);
                    
                    canvasBPSK_FHSS.style.width = '600px';

                    const ctxBPSK_FHSS = canvasBPSK_FHSS.getContext('2d');
                    const BPSK_FHSSgraf = new Chart(ctxBPSK_FHSS, {
                    type: 'bar',
                    data: {
                        labels: BPSK_FHSS,
                        datasets: [{
                            //label: 'BPSK sa FHSS proširenim spektrom',
                            label: 'BPSK with FHSS spread spectrum',
                            data: BPSK_FHSS,
                            backgroundColor: [
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)' 
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });

                    console.log('BPSK_FHSS: ', BPSK_FHSS);

                    /* <= divBPSK */

                    /*divA3 */
                    let divA3 = document.createElement('div');
                    proJS.appendChild(divA3);
                    
                    let wA2 = document.createElement('p');
                    wA2.textContent = 'Dodavanje watermark-a: ';
                    wA2.textContent = 'Watermark insertion: ';
                    divA3.appendChild(wA2);
                        
                    let btnWdodavanje = document.createElement('button');
                    btnWdodavanje.textContent = 'Dodavanje';
                    btnWdodavanje.textContent = 'Insert';
                    divA3.appendChild(btnWdodavanje); 
                    
                    btnWdodavanje.addEventListener('click', () => {
                    
                        let dodavanjeT = document.createElement('p');
                        dodavanjeT.textContent = 'Slika sa dodatim (umetnutim) watermarkom: ';
                        dodavanjeT.textContent = 'Image with added (inserted) watermark: ';
                        divA3.appendChild(dodavanjeT); 
                        
                        //let
                        wKanvasA1 = document.querySelector('canvas');
                        divA3.appendChild(wKanvasA1);
            
                        if(slikawAsl.width >= 1920){
            
                            wKanvasA1.width = slikawAsl.width;
                            wKanvasA1.height = slikawAsl.height;
            
                        } else {
            
                            wKanvasA1.width = slikawAsl.width;
                            wKanvasA1.height = slikawAsl.height;
            
                        }
                        
                        sirina = slikawAsl.width;
                        visina = slikawAsl.height;
            
                        //console.log('Širina i visina su: ', sirina, visina);
                        //let
                        ctxWkanvasA1 = wKanvasA1.getContext('2d');
                        //console.log('Broj piksela ulazne slike je: ', pikseliWAniz.length);
            
                        slikaSaWatermarkomNiz = new Array();
            
                        slikaSaWatermarkomNizA1 = new Array();

                        //Novooo: 15.5.2022. 
                        //64 => 512
                        for(let i = 512; i < pikseliWAniz.length; i++){
                            slikaSaWatermarkomNizA1.push(pikseliWAniz[i]);
                        }

                        //Novoooo: proracunNizA => noviNizProracun
                        //console.log('Prvih 64 elemenata niza nakon proračuna nad pikselima: ', noviNizProracun);
                        //console.log('Elementi slike bez prvih 64 vrednosti piksela: ', slikaSaWatermarkomNizA1);
                        
                        //Novoooooo | 15.5.2022. 
                        noviNizProracun = pikseliWAniz512.map((x, y) => x - BPSK_FHSS[y]);
                        console.log('NoviNizProračun | 15.5.2022. : ', noviNizProracun);
                        
                        slikaSaWatermarkomNiz = [].concat(noviNizProracun, slikaSaWatermarkomNizA1);
                        slikaSaWatermarkomNizA = slikaSaWatermarkomNiz.slice(0, 4 * sirina * visina);

                        //console.log('Novi, sveobuhvatni niz slike sa umetnutim watermarkom: ', slikaSaWatermarkomNiz);
            
                        slikaSaWatermarkomNizU8C = new Uint8ClampedArray(slikaSaWatermarkomNizA);
                        //console.log('slikaSaWatermarkomNizU8C: ', slikaSaWatermarkomNizU8C);
            
                        slikaWslikaApodaci = new ImageData(slikaSaWatermarkomNizU8C, sirina, visina);
                        ctxWkanvasA1.putImageData(slikaWslikaApodaci, 0, 0);
            
                    });
                    
                    let btnWnoviUnos = document.createElement('button');
                    btnWnoviUnos.textContent = 'Novi unos';
                    btnWnoviUnos.textContent = 'New input';
                    divA3.appendChild(btnWnoviUnos);
                    
                    btnWnoviUnos.addEventListener('click', () => {
                        window.location.reload(true);
                    });
            
                    /*divA3 */
                    let whrA4a = document.createElement('hr');
                    whrA4a.width = 300;
                    proJS.appendChild(whrA4a);
            
                    /*divA4 */
                    divA4 = document.createElement('div');
                    proJS.appendChild(divA4);
            
                    let wA6 = document.createElement('p');
                    wA6.textContent = 'Izvlačenje watermarka: ';
                    wA6.textContent = 'Watermark extraction: ';
                    divA4.appendChild(wA6);

                    //let
                    let btnWizdvajanje = document.createElement('button');
                    btnWizdvajanje.textContent = 'Izvlačenje';
                    btnWizdvajanje.textContent = 'Extract';
                    divA4.appendChild(btnWizdvajanje);

                    btnWizdvajanje.addEventListener('click', () => {
                        
                        //let
                        let divA4a = document.createElement('div');
                        divA4.appendChild(divA4a);

                        let txtWiz = document.createElement('p');
                        txtWiz.textContent = 'Vrednosti watermarka: ';
                        txtWiz.textContent = 'Watermark value: ';
                        divA4a.appendChild(txtWiz);

                        let txtaWizdvajanje = document.createElement('textarea');
                        divA4a.appendChild(txtaWizdvajanje);

                        let wIzvlacenjeA = ctxWkanvasA1.getImageData(0, 0, wKanvasA1.width, wKanvasA1.height);
                        console.log('vIzvlacenjeNizA: ', wIzvlacenjeA);
                        let wWatermark = wIzvlacenjeA.data;

                        txtaWizdvajanje.value = wWatermark;

                    });

                    /*divA4 */
            
                    let whrA5 = document.createElement('hr');
                    whrA5.width = 300;
                    proJS.appendChild(whrA5);
            
                    /*divA5 */
                    divA5 = document.createElement('div');
                    proJS.appendChild(divA5);
                    
                    let wA7 = document.createElement('p');
                    wA7.textContent = 'Parametri za poređenje watermarka: ';
                    wA7.textContent = 'Watermark comparasion parameters: ';
                    divA5.appendChild(wA7);
                    
                    let wA7a = document.createElement('p');
                    wA7a.style.fontWeight = 'bold';
                    wA7a.textContent = 'PSNR i SSIM ';
                    wA7a.textContent = 'PSNR and SSIM ';
                    divA5.appendChild(wA7a);
                    /*divA5 */
            
                    let whrA6_ = document.createElement('hr');
                    whrA6_.width = 300;
                    proJS.appendChild(whrA6_);
            
                     /*divA6 */
                     //Izvlačenje watermarka
                    /*divA6 */
            
                    /*divA7 */
                    //Parametri za poređenje watermarka
                    divA6a = document.createElement('div');
                    proJS.appendChild(divA6a);
            
                    let btnWpodaci = document.createElement('button');
                    btnWpodaci.textContent = 'Podaci';
                    btnWpodaci.textContent = 'Data';
                    divA6a.appendChild(btnWpodaci);
            
                    divA7 = document.createElement('div');
                    proJS.appendChild(divA7);
            
                    btnWpodaci.addEventListener('click', () => {
                        
                        //wtPSNR - ***********
                        let wtPSNR = document.createElement('p');
                        wtPSNR.textContent = 'Podaci o parametru PSNR: ';
                        wtPSNR.textContent = 'PSNR parameter data: ';
                        wtPSNR.style.fontWeight = 'bold';
                        divA7.appendChild(wtPSNR);
            
                        let whrA6a1 = document.createElement('hr');
                        whrA6a1.width = 300;
                        divA7.appendChild(whrA6a1);
            
                        //dimSlika
                        dimSlika = slikawAsl.width * slikawAsl.height;
                        console.log('Širina slike: ', slikawAsl.width);
                        console.log('Visina slike: ', slikawAsl.height);
                        console.log('Dimenzija slika: ', dimSlika);
            
                        let wDimSlika = document.createElement('p');
                        wDimSlika.textContent = 'Dimenzije slike u pikselima: ';
                        wDimSlika.textContent = 'Image dimensions in pixels: ';
                        divA7.appendChild(wDimSlika);
            
                        let inpDimSlika = document.createElement('input');
                        inpDimSlika.value = `${slikawAsl.width} x ${slikawAsl.height}`;
                        divA7.appendChild(inpDimSlika);
            
                        /*
                        let whrA6b = document.createElement('hr');
                        whrA6b.width = 300;
                        divA7.appendChild(whrA6b);
                        */
            
                        //S1
                        S1 = pikseliWAniz.reduce((a, b) => a + b, 0);
                        //console.log('S1 = ', S1);
            
                        let wS1 = document.createElement('p');
                        wS1.textContent = 'Zbir svih piksela ulazne slike: ';
                        wS1.textContent = 'Sum of all pixels of the input image: ';
                        divA7.appendChild(wS1);
            
                        let inpS1 = document.createElement('input');
                        inpS1.value = S1;
                        divA7.appendChild(inpS1);
            
                        /*
                        let whrA7 = document.createElement('hr');
                        whrA7.width = 300;
                        divA7.appendChild(whrA7);
                        */
            
                        //S2
                        S2 = slikaSaWatermarkomNiz.reduce((a, b) => a + b, 0);
                        //console.log('S2 = ', S2);
            
                        let wS2 = document.createElement('p');
                        wS2.textContent = 'Zbir svih piksela slike sa watermarkom: ';
                        wS2.textContent = 'Sum of all pixels of the watermarked image: ';
                        divA7.appendChild(wS2);
            
                        let inpS2 = document.createElement('input');
                        inpS2.value = S2;
                        divA7.appendChild(inpS2);
            
                        /*
                        let whrA8 = document.createElement('hr');
                        whrA8.width = 300;
                        divA7.appendChild(whrA8);
                        */
            
                        //srKvGr
                        srednjaKvadratnaGreska = (S1 - S2)**2 / dimSlika;
                        //console.log('Srednja kvadratna greška je: ', srednjaKvadratnaGreska);
            
                        //Novooo | Nova formula za proračun srednje kvadratne greške | 10.3.2022. 
                        srKvGrNiz = new Array();
                        srKvGrNiz = pikseliWAniz.map((a, b) => (a - slikaSaWatermarkomNiz[b])**2);
                        srKvGrVr = srKvGrNiz.reduce((a, b) => a + b, 0);
                        srednjaKvadratnaGreskaA = srKvGrVr / dimSlika;
            
                        console.log('srKvGrNiz: ', srKvGrNiz);
                        console.log('srKvGrVr: ', srKvGrVr);
                        console.log('srednjaKvadratnaGreska: ', srednjaKvadratnaGreska);
                        console.log('srednjaKvadratnaGreskaA: ', srednjaKvadratnaGreskaA);
            
                        let wSrKvVr = document.createElement('p');
                        wSrKvVr.textContent = 'Srednja kvadratna greška: ';
                        wSrKvVr.textContent = 'Mean square error | MSE: ';
                        divA7.appendChild(wSrKvVr);
            
                        let inpSrKv = document.createElement('input');
                        inpSrKv.value = srednjaKvadratnaGreskaA;
                        divA7.appendChild(inpSrKv);
            
                        /*
                        let whrA8a = document.createElement('hr');
                        whrA8a.width = 300;
                        divA7.appendChild(whrA8a);
                        */
            
                        //PSNR
                        PSNRv1 = 10 * Math.log10(255**2/ srednjaKvadratnaGreska);
                        PSNR = 10 * Math.log10(255**2/ srednjaKvadratnaGreskaA);
            
                        console.log('PSNRv1 = ', PSNRv1);
                        console.log('PSNR = ', PSNR);
            
                        let wPSNR = document.createElement('p');
                        wPSNR.textContent = 'Odnos signal-šum tj. PSNR: ';
                        wPSNR.textContent = 'Peak Signal-to-Noise Ratio | PSNR: ';
                        divA7.appendChild(wPSNR);
            
                        let inpPSNR = document.createElement('input');
                        inpPSNR.value = PSNR;
                        divA7.appendChild(inpPSNR);
            
                        let whrA9 = document.createElement('hr');
                        whrA9.width = 300;
                        divA7.appendChild(whrA9);
                        
                        //wtSSIM - **********
                        let wtSSIM = document.createElement('p');
                        wtSSIM.textContent = 'Podaci o parametru SSIM: ';
                        wtSSIM.textContent = 'SSIM parameter data: ';
                        wtSSIM.style.fontWeight = 'bold';
                        divA7.appendChild(wtSSIM);
            
                        let whrA10 = document.createElement('hr');
                        whrA10.width = 300;
                        divA7.appendChild(whrA10);
            
                        //luminentnost (osvetljaj/osvetljenost)
                        //luminentnost - x
                        
                        let Nx = pikseliWAniz.length;
            
                        let wNx = document.createElement('p');
                        wNx.textContent = 'Broj piksela originalne slike: ';
                        wNx.textContent = 'The number of pixels in the original image: ';
                        divA7.appendChild(wNx);
            
                        let inpNx = document.createElement('input');
                        inpNx.value = Nx;
                        divA7.appendChild(inpNx);
            
                        /*
                        let whrA11 = document.createElement('hr');
                        whrA11.width = 300;
                        divA7.appendChild(whrA11);
                        */
            
                        //sumx
                        let sumx = pikseliWAniz.reduce((a, b) => a + b, 0);
            
                        let wsumx = document.createElement('p');
                        wsumx.textContent = 'Zbir piksela originalne slike: ';
                        wsumx.textContent = 'Pixel sum of the original image: ';
                        divA7.appendChild(wsumx);
            
                        let inpSumx = document.createElement('input');
                        inpSumx.value = sumx;
                        divA7.appendChild(inpSumx);
            
                        //mix
                        let mix = (1 / Nx) * sumx; 
                        //console.log('Nx = ', Nx);
                        //console.log('sumx = ', sumx);
                        //console.log('mix = ', mix);
            
                        let wmix = document.createElement('p');
                        wmix.textContent = 'Osvetljenost (luminentost) originalne slike - mi(x): ';
                        wmix.textContent = 'Original image luminence | mi(x): ';
                        divA7.appendChild(wmix);
            
                        let inpWmix = document.createElement('input');
                        inpWmix.value = mix;
                        divA7.appendChild(inpWmix);
            
                        //luminentnost - y
                        //Ny
                        let Ny = slikaSaWatermarkomNiz.length;
            
                        let wNy = document.createElement('p');
                        wNy.textContent = 'Broj piksela slike sa watermarkom: ';
                        wNy.textContent = 'The number of pixels in the watermarked image: ';
                        divA7.appendChild(wNy);
            
                        let inpNy = document.createElement('input');
                        inpNy.value = Ny;
                        divA7.appendChild(inpNy);
            
                        //sumy
                        let sumy = slikaSaWatermarkomNiz.reduce((a, b) => a + b, 0);
            
                        let wsumy = document.createElement('p');
                        wsumy.textContent = 'Zbir svih piksela slike sa watermarkom: ';
                        wsumy.textContent = 'The sum of all pixels of the watermarked image: ';
                        divA7.appendChild(wsumy);
            
                        let inpWsumy = document.createElement('input');
                        inpWsumy.value = sumy;
                        divA7.appendChild(inpWsumy);
            
                        //miy
                        let miy = (1 / Ny) * sumy;
                        //console.log('Ny = ', Ny);
                        //console.log('sumy = ', sumy);
                        //console.log('miy = ', miy);
            
                        let wmiy = document.createElement('p');
                        wmiy.textContent = 'Osvetljenost (luminentnost) slike sa watermarkom - mi(y): ';
                        wmiy.textContent = 'Watermarked image luminence | mi(y): ';
                        divA7.appendChild(wmiy);
            
                        let inpWmiy = document.createElement('input');
                        inpWmiy.value = miy;
                        divA7.appendChild(inpWmiy);
            
                        //kontrast
                        //x
                        let sigmaxNiz = new Array();
            
                        sigmaxNiz = pikseliWAniz.map((a) => (a - mix)**2);
                        let sumaSigmaxNiz = sigmaxNiz.reduce((a, b) => a + b, 0);
            
                        //sigmax
                        let sigmax = Math.sqrt((1/(Nx - 1)) * sumaSigmaxNiz);
                        //console.log('Niz sigma(x): ', sigmaxNiz);
                        //console.log('Suma sigma(x) niz: ', sumaSigmaxNiz);
                        //console.log('sigma(x) = ', sigmax);
            
                        let wsigmax = document.createElement('p');
                        wsigmax.textContent = 'Kontrast originalne slike - sigma(x): ';
                        wsigmax.textContent = 'Original image contrast | sigma(x): ';
                        divA7.appendChild(wsigmax);
            
                        let inpSigmax = document.createElement('input');
                        inpSigmax.value = sigmax;
                        divA7.appendChild(inpSigmax);
            
                        let C1, K1, L;

                        K1 = 1;
                        L = 255;
                        C1 = (K1 * L)**2;
                        console.log('C1 = ', C1);

                        //y
                        let sigmayNiz = new Array();
            
                        sigmayNiz = slikaSaWatermarkomNiz.map((a) => (a - miy)**2);
                        let sumaSigmayNiz = sigmayNiz.reduce((a, b) => a + b, 0);
            
                        //sigmay
                        let sigmay = Math.sqrt((1/(Ny - 1)) * sumaSigmayNiz);
                        //console.log('Niz sigma(y): ', sigmayNiz);
                        //console.log('Suma sigma(y) niz: ', sumaSigmayNiz);
                        //console.log('sigma(y) = ', sigmay);
            
                        let wsigmay = document.createElement('p');
                        wsigmay.textContent = 'Kontrast slike sa watermarkom - sigma(y): ';
                        wsigmay.textContent = 'Watermarked image contrast | sigma(y): ';
                        divA7.appendChild(wsigmay);
            
                        let inpSigmay = document.createElement('input');
                        inpSigmay.value = sigmay;
                        divA7.appendChild(inpSigmay);
            
                        let C2, K2;
                        K2 = 2;
                        C2 = (K2 * L)**2;
                        console.log('C2 = ', C2);

                        //struktura
            
                        //funkcija za poređenje luminentnosti (osvetljenosti)
            
                        //funkcija za poređenje kontrasta
            
                        //funkcija za poređenje strukture
            
                        //standardna devijacija
                        //console.log('Nx = ', Nx);
                        //console.log('Ny = ', Ny);
                        xNiz = pikseliWAniz.map(a => a - mix, 0);
                        yNiz = slikaSaWatermarkomNiz.map(a => a - miy, 0);
            
                        //console.log('xNiz: ', xNiz);
                        //console.log('yNiz: ', yNiz);
            
                        let sumaXYniz = xNiz.map((a, b) => a * yNiz[b]);
                        //console.log('sumaXYniz: ', sumaXYniz); 
                        sumaXY = sumaXYniz.reduce((a, b) => a + b, 0);
                        //console.log('sumaXY = ', sumaXY);
            
                        //let sumaXY = sumaSigmaxNiz * sumaSigmayNiz;
            
                        //sigmaxy
                        let sigmaxy = (1/(Nx - 1)) * sumaXY;
                        //console.log('sigmaxy = ', sigmaxy);
            
                        let wsigmaxy = document.createElement('p');
                        wsigmaxy.textContent = 'Standardna devijacija datih slika - sigma(xy): ';
                        wsigmaxy.textContent = 'Standard deviation of given images | sigma(xy): ';
                        divA7.appendChild(wsigmaxy);
            
                        let inpSigmaxy = document.createElement('input');
                        inpSigmaxy.value = sigmaxy;
                        divA7.appendChild(inpSigmaxy);
            
                        //SSIM
                        let SSIM = ((2 * mix * miy + C1) * (2 * sigmaxy + C2)) / ((mix**2 + miy**2 + C1) * (sigmax**2 + sigmay**2 + C2));
                        //console.log('SSIM = ', SSIM);
            
                        let wSSIM = document.createElement('p');
                        wSSIM.textContent = 'Indeks strukturalne sličnosti tj. SSIM: ';
                        wSSIM.textContent = 'Structural Similarity Index | SSIM: ';
                        divA7.appendChild(wSSIM);
            
                        let inpSSIM = document.createElement('input');
                        inpSSIM.value = SSIM;
                        divA7.appendChild(inpSSIM);
            
                    });
            
                    /*divA7 */
                    
                    
                    //13.12.2022. - Nastavak proširenja programa - proJS-w2
                    //Dodavanje novih modulacionih tehnika
                   
                    divCPFSK = document.createElement('div');
                    proJS.appendChild(divCPFSK);

                    let whrW2 = document.createElement('hr');
                    whrW2.width = 600;
                    divCPFSK.appendChild(whrW2);

                    let txtCPFSK = document.createElement('p');
                    txtCPFSK.textContent = 'CPFSK modulacija';
                    txtCPFSK.textContent = 'CPFSK modulation';
                    txtCPFSK.style.fontWeight = 'bold';
                    divCPFSK.appendChild(txtCPFSK);

                    let whrW2a = document.createElement('hr');
                    whrW2a.width = 600;
                    divCPFSK.appendChild(whrW2a);

                    let btnCPFSK = document.createElement('button');
                    btnCPFSK.textContent = 'CPFSK';
                    divCPFSK.appendChild(btnCPFSK);

                    btnCPFSK.addEventListener('click', function(){

                        let txtUlSignalCPFSK = document.createElement('p');
                        txtUlSignalCPFSK.textContent = 'Ulazni signal za CPFSK modulaciju: ';
                        txtUlSignalCPFSK.textContent = 'Input signal for CPFSK modulation: ';
                        divCPFSK.appendChild(txtUlSignalCPFSK);

                        let txtaCPFSK = document.createElement('textarea');
                        txtaCPFSK.style.border = '2px dotted rgb(47, 38, 173)'; 
                        txtaCPFSK.style.borderRadius = '10px';
                        divCPFSK.appendChild(txtaCPFSK);

                        txtaCPFSK.value = pikseliWAniz512;

                        let txtGrafVrUlSigCPFSK = document.createElement('p');
                        txtGrafVrUlSigCPFSK.textContent = 'Grafičke vrednosti ulaznog signala za CPFSK modulaciju: ';
                        txtGrafVrUlSigCPFSK.textContent = 'Graphical input signal values for CPFSK modulation: ';
                        divCPFSK.appendChild(txtGrafVrUlSigCPFSK);

                        //8. kanvas - canvasUlsigCPFSK
                        let canvasUlSigCPFSK = document.createElement('canvas');
                        divCPFSK.appendChild(canvasUlSigCPFSK);

                        //Novo: 27.12.2022. 
                        canvasUlSigCPFSK.style.width = '600px';

                        const ctxUlSigCPFSK = canvasUlSigCPFSK.getContext('2d');
                        const ulSigCPFSKgraf = new Chart(ctxUlSigCPFSK, {

                            type: 'bar',
                            data: {
                                labels: pikseliWAniz512,
                                datasets: [{
                                    //label: 'Ulazni signal (za CPFSK)',
                                    label: 'Input signal (for CPFSK)',
                                    data: pikseliWAniz512,
                                    backgroundColor: [
                                       'rgba(47, 38, 173, 1)',
                                       'rgba(47, 38, 173, 1)',
                                       'rgba(47, 38, 173, 1)'
                                    ],
                                    borderColor: [
                                        'black'
                                    ],
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                scales: {
                                    y: {
                                    beginAtZero: true
                                    }
                                }
                            }

                        });

                        //Parametri signala
                        //Eb = 1;
                        //Tb = 1;
                        //f1 = 5 kHz;
                        //f2 = 8 kHz;
                        //p0 = Pi/4;

                        //let
                        let Eb = 1;
                        let Tb = 1; 
                         f1 = 8000; //Hz
                         f2 = 5000; //Hz
                        let vrPi = 3.14;
                        
                        let p0 = vrPi / 4; //3.14 umesto Math.PI
                        let vrSig1 = Number();
                        let vrSig0 = Number();
                        //let kolicnikCPFSK = Number(Math.sqrt(2*Eb/Tb)).toFixed(2);
                        let kolicnikCPFSK = Math.sqrt(2*Eb/Tb);
                        let tNiz = new Array();
                        let tNizNeg = new Array();
                        let T1 = Number();
                        let tVr = 0;
                        //let negVr;
                        let tNegVr = 0;
                        let h = 1;
                        let p_t = new Array();
                        T1 = 1 / f1;

                        fc = 0.5*(f1 - f2);
                        let CPFSKsignal = new Array();

                        console.log('CPFSK modulacija ');

                        console.log('kolicnikCPFSK: ', kolicnikCPFSK);

                        vrSig1 = 2 * Math.PI * f1;
                        vrSig0 = 2 * Math.PI * f2;

                        console.log('vrSig1: ', vrSig1);
                        console.log('vrSig0: ', vrSig0);
                        
                        //Generisanje vremenskog niza
                        console.log('T1: ', T1);

                        for(let i = 0; i < pikseliWAniz512.length; i++){

                            tVr += T1;
                            tNiz.push(tVr);

                        }

                        console.log('tNiz: ', tNiz);

                        for(let i = 0; i < tNiz.length; i++){

                            let a = tNiz.indexOf(tNiz[i]);
                            
                            
                            if(a % 2 == 1){

                                tNegVr = 1 * tNiz[i];
                                

                            } else{

                                tNegVr = -1 * tNiz[i];
                                

                            }

                            //tNizNeg.push(a);
                            tNizNeg.push(tNegVr);

                        }

                        console.log('tNizNeg: ', tNizNeg);

                        //p_t = tNiz.map(p => p0 + vrPi * h / Tb * p);
                        
                        p_t = tNizNeg.map(fazaProracun);

                        function fazaProracun(p){
                            return p0 + vrPi * h / Tb * p;
                        }

                        console.log('p_t: ', p_t);

                        ///////////////////////////
                        //28.2.2023. - p_t dodatak
                        //////////////////////////
                        let p_t_N = new Array();
                        let p_t_n = 0;

                        for(let i = 0; i < p_t.length; i++){

                            let x = p_t.indexOf(p_t[i]);
                            if(x % 2 == 1){
                                p_t_n = -1 * p_t[i];
                            } else {
                                p_t_n = 1 * p_t[i];
                            }

                            p_t_N.push(p_t_n);

                        }

                        console.log('p_t_N: ', p_t_N);

                        //CPFSK signal:
                        CPFSKsignal = p_t_N.map(p => kolicnikCPFSK * Math.cos(2 * vrPi * fc + p));
                        console.log('CPFSKsignal: ', CPFSKsignal);

                        //////
                        //Numeričke vrednosti CPFSK faze
                        let txtNumVrFazCPFSK = document.createElement('p');
                        txtNumVrFazCPFSK.textContent = 'Numeričke vrednosti CPFSK faze: ';
                        txtNumVrFazCPFSK.textContent = 'Numerical values of CPFSK phase: ';
                        divCPFSK.appendChild(txtNumVrFazCPFSK);

                        let numVrFazCPFSK = document.createElement('textarea');
                        numVrFazCPFSK.value = p_t_N;
                        divCPFSK.appendChild(numVrFazCPFSK);

                        //Grafičke vrednosti CPFSK faze
                        let txtGrafVrFazCPFSK = document.createElement('p');
                        txtGrafVrFazCPFSK.textContent = 'Grafičke vrednosti CPFSK faze: ';
                        txtGrafVrFazCPFSK.textContent = 'Graphic values of CPFSK phase: ';
                        divCPFSK.appendChild(txtGrafVrFazCPFSK);
                        
                        //9. kanvas - canvasGrafVrFazCPFSK
                        let canvasGrafVrFazCPFSK = document.createElement('canvas');
                        divCPFSK.appendChild(canvasGrafVrFazCPFSK);

                        canvasGrafVrFazCPFSK.style.width = '600px';

                        const ctxGrafVrFazCPFSK = canvasGrafVrFazCPFSK.getContext('2d');
                        const grafVrFazCPFSK = new Chart(ctxGrafVrFazCPFSK, {

                            type: 'line',
                            data: {
                                labels: p_t_N,
                                datasets: [{
                                    //label: 'CPFSK faza',
                                    label: 'CPFSK phase',
                                    data: p_t_N,
                                    backgroundColor: [
                                       'rgba(47, 38, 173, 1)',
                                       'rgba(47, 38, 173, 1)',
                                       'rgba(47, 38, 173, 1)'
                                    ],
                                    borderColor: [
                                        'black'
                                    ],
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                scales: {
                                    y: {
                                    beginAtZero: true
                                    }
                                }
                            }

                        });

                        //Numeričke vrednosti CPFSK modulisanog signala
                        let txtNumVrCPFSK = document.createElement('p');
                        txtNumVrCPFSK.textContent = 'Numeričke vrednosti CPFSK modulisanog signala: ';
                        txtNumVrCPFSK.textContent = 'Numerical values of CPFSK modulated signal: ';
                        divCPFSK.appendChild(txtNumVrCPFSK);

                        let numVrCPFSK = document.createElement('textarea');
                        numVrCPFSK.value = CPFSKsignal;
                        divCPFSK.appendChild(numVrCPFSK);

                        //Grafičke vrednosti CPFSK modulisanog signala
                        let txtGrafVrCPFSK = document.createElement('p');
                        txtGrafVrCPFSK.textContent = 'Grafičke vrednosti CPFSK modulisanog signala: ';
                        txtGrafVrCPFSK.textContent = 'Graphical values of CPFSK modulated signal: ';
                        divCPFSK.appendChild(txtGrafVrCPFSK);

                        //10. kanvas - canvasGrafVrCPFSK
                        let canvasGrafVrCPFSK = document.createElement('canvas');
                        divCPFSK.appendChild(canvasGrafVrCPFSK);

                        canvasGrafVrCPFSK.style.width = '600px';

                        const ctxGrafVrCPFSK = canvasGrafVrCPFSK.getContext('2d');
                        const grafCPFSK = new Chart(ctxGrafVrCPFSK, {

                            type: 'line',
                            data: {
                                labels: tNizNeg,
                                datasets: [{
                                    //label: 'CPFSK modulisani signal',
                                    label: 'CPFSK modulated signal',
                                    data: CPFSKsignal,
                                    backgroundColor: [
                                       'rgba(47, 38, 173, 1)',
                                       'rgba(47, 38, 173, 1)',
                                       'rgba(47, 38, 173, 1)'
                                    ],
                                    borderColor: [
                                        'black'
                                    ],
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                scales: {
                                    y: {
                                    beginAtZero: true
                                    }
                                }
                            }

                        });

                        //Novi kod: 
                        let txtDodavanjeWcpfsk = document.createElement('p');
                        txtDodavanjeWcpfsk.textContent = 'Dodavanje watermark-a: ';
                        txtDodavanjeWcpfsk.textContent = 'Watermark adding (insertion): ';
                        divCPFSK.appendChild(txtDodavanjeWcpfsk);

                        let btnDodavanjeWcpsfsk = document.createElement('button');
                        btnDodavanjeWcpsfsk.textContent = 'Dodavanje';
                        btnDodavanjeWcpsfsk.textContent = 'Adding';
                        divCPFSK.appendChild(btnDodavanjeWcpsfsk);

                        btnDodavanjeWcpsfsk.addEventListener('click', function(){
                            
                            let wCPFSKniz = new Array();
                            let wCPFSKnizA = new Array();
                            let wCPFSKniz1 = new Array();

                            console.log('Vrednosti prvih 512 piksela slike: ', pikseliWAniz512);
                            console.log('Vrednosti CPFSK modulacije: ', CPFSKsignal);

                            ///////////////////
                            //#w - Novo rešenje
                            ///////////////////
                            wCPFSKniz1 = pikseliWAniz512.map((x, y) => Math.abs(Math.ceil(x - CPFSKsignal[y])) );
                            wCPFSKniz = pikseliWAniz512.map(function(x, y){

                                if(pikseliWAniz512.indexOf(x) % 2 == 0){
                                    return Math.abs(Math.floor(x + CPFSKsignal[y]));
                                } else {
                                    return Math.abs(Math.ceil(x - CPFSKsignal[y]));
                               }
                                
                            });

                            console.log('CPFSK watermark: ', wCPFSKniz);
                            //console.log('CPFSK-2 watermark: ', wCPFSKniz2);

                            let txtwCPFSK = document.createElement('p');
                            txtwCPFSK.textContent = 'Vrednosti watermark-a nastalog CPFSK modulacijom: ';
                            txtwCPFSK.textContent = 'Watermark values created by CPFSK modulation: ';
                            divCPFSK.appendChild(txtwCPFSK);

                            let txtawCPFSK = document.createElement('textarea');
                            divCPFSK.appendChild(txtawCPFSK);
                            txtawCPFSK.value = wCPFSKniz;

                            let txtWslikaCPFSK = document.createElement('p');
                            txtWslikaCPFSK.textContent = 'Slika sa dodatim watermark-om: ';
                            txtWslikaCPFSK.textContent = 'Image with added watermark: ';
                            divCPFSK.appendChild(txtWslikaCPFSK);

                            console.log('pikseliWAniz: ', pikseliWAniz);

                            let slikawCPFSKdemo = new Array();
                            let slikawCPFSKniz = new Array();
                            let slikawCPFSKnizA = new Array();

                            platnowCPFSK = document.querySelector('canvas');
                            divCPFSK.appendChild(platnowCPFSK);
                            ctxwCPFSK = platnowCPFSK.getContext('2d');

                            if(slikawAsl.width >= 1920){

                                platnowCPFSK.width = slikawAsl.width;
                                platnowCPFSK.height = slikawAsl.height;

                            } else {

                                platnowCPFSK.width = slikawAsl.width;
                                platnowCPFSK.height = slikawAsl.height;

                            }

                            sirinaA = slikawAsl.width;
                            visinaA = slikawAsl.height;

                            for(let i = 512; i < pikseliWAniz.length; i++){
                                slikawCPFSKdemo.push(pikseliWAniz[i]);
                            }

                            slikawCPFSKniz = [].concat(wCPFSKniz, slikawCPFSKdemo);
                            slikawCPFSKnizA = slikawCPFSKniz.slice(0, 4 * sirinaA * visinaA);
                            console.log('slikawCPFSKniz: ', slikawCPFSKniz);
                            slikawCPFSKnizAU8C = new Uint8ClampedArray(slikawCPFSKnizA);

                            slikawCPFSKpodaci = new ImageData(slikawCPFSKnizAU8C, sirinaA, visinaA);
                            ctxwCPFSK.putImageData(slikawCPFSKpodaci, 0, 0);
                            
                            //---------------------
                            //Novi kod: 
                            let txtParametriwCPFSK = document.createElement('p');
                            txtParametriwCPFSK.textContent = 'Parametri za poređenje watermark-a (kod CPFSK modulacije): ';
                            txtParametriwCPFSK.textContent = 'Parameters for watermark comparison (at CPFSK modulation): ';
                            divCPFSK.appendChild(txtParametriwCPFSK);

                            let btnParametriwCPFSK = document.createElement('button');
                            btnParametriwCPFSK.textContent = 'Parametri';
                            btnParametriwCPFSK.textContent = 'Parameters';
                            divCPFSK.appendChild(btnParametriwCPFSK);

                            btnParametriwCPFSK.addEventListener('click', function(){
                                
                                console.log('CPFSK modulacija => PSNR i SSIM parametri: ');

                                //wtPSNR - ***********
                                let cPSNR = document.createElement('p');
                                cPSNR.textContent = 'Podaci o parametru PSNR: ';
                                cPSNR.textContent = 'PSNR parameter data: ';
                                //wtPSNR.textContent = 'PSNR parameter data: ';
                                cPSNR.style.fontWeight = 'bold';
                                divCPFSK.appendChild(cPSNR);
                    
                                let cPhr1 = document.createElement('hr');
                                cPhr1.width = 300;
                                divCPFSK.appendChild(cPhr1);
                    
                                //dimSlika
                                //dimSlika = slikawAsl.width * slikawAsl.height;
                                console.log('Širina slike: ', slikawAsl.width);
                                console.log('Visina slike: ', slikawAsl.height);
                                console.log('Dimenzija slika: ', dimSlika);
                    
                                let cDimSlika = document.createElement('p');
                                cDimSlika.textContent = 'Dimenzije slike u pikselima: ';
                                cDimSlika.textContent = 'Image dimensions in pixels: ';
                                //wDimSlika.textContent = 'Image dimensions in pixels: ';
                                divCPFSK.appendChild(cDimSlika);
                    
                                let inpCdimSlika = document.createElement('input');
                                inpCdimSlika.value = `${slikawAsl.width} x ${slikawAsl.height}`;
                                divCPFSK.appendChild(inpCdimSlika);
                    
                                /*
                                let whrA6b = document.createElement('hr');
                                whrA6b.width = 300;
                                divA7.appendChild(whrA6b);
                                */
                    
                                //S1
                                //S1 = pikseliWAniz.reduce((a, b) => a + b, 0);
                                //console.log('S1 = ', S1);
                    
                                let S1c = document.createElement('p');
                                S1c.textContent = 'Zbir svih piksela ulazne slike: ';
                                S1c.textContent = 'Sum of all pixels of the input image: ';
                                //wS1.textContent = 'Sum of all pixels of the input image: ';
                                divCPFSK.appendChild(S1c);
                    
                                let inpS1c = document.createElement('input');
                                inpS1c.value = S1;
                                divCPFSK.appendChild(inpS1c);

                                let wS2c = document.createElement('p');
                                wS2c.textContent = 'Zbir svih piksela slike sa vodenom oznakom: ';
                                wS2c.textContent = 'Sum of all watermarked image pixels: ';
                                divCPFSK.appendChild(wS2c);

                                console.log('slikawCPFSKnizA: ', slikawCPFSKnizA);
                                S2c = slikawCPFSKnizA.reduce((a, b) => a + b, 0);
                                console.log('S-BPSK-FHSS: ', S2);
                                console.log('S2-CPFSK: ', S2c);

                                let inpS2c = document.createElement('input');
                                inpS2c.value = S2c;
                                divCPFSK.appendChild(inpS2c);

                                //Proračun srednje kvadratne greške
                                let srKvGrCPFSK = (S1 - S2c) **2 / dimSlika;
                                let srKvGrCPFSKniz = new Array();
                                srKvGrCPFSKniz = pikseliWAniz.map((a, b) => (a - slikawCPFSKnizA[b])**2);
                                let srKvGrCPFSKvr = srKvGrCPFSKniz.reduce((a, b) => a + b, 0);
                                
                                //let
                                srednjaKvadratnaGreskaCPFSK = srKvGrCPFSKvr / dimSlika;
                                PSNRc = 10 * Math.log10(255**2/srednjaKvadratnaGreskaCPFSK);

                                console.log('PSNR_BPSK = ', PSNR);
                                console.log('PSNR_CPFSK = ', PSNRc);

                                let txtSrKvVrC = document.createElement('p');
                                txtSrKvVrC.textContent = 'Srednja kvadratna greška: ';
                                txtSrKvVrC.textContent = 'Mean square error | MSE: ';
                                //wSrKvVr.textContent = 'Mean square error - MSE: ';
                                divCPFSK.appendChild(txtSrKvVrC);
            
                                let inpSrKvC = document.createElement('input');
                                inpSrKvC.value = srednjaKvadratnaGreskaCPFSK;
                                divCPFSK.appendChild(inpSrKvC);

                                console.log('Srednja kvadratna greška kod BPSK: ', srednjaKvadratnaGreskaA);
                                console.log('Srednja kvadratna greška kod CPFSK: ', srednjaKvadratnaGreskaCPFSK);

                                let txtPSNR_CPFSK = document.createElement('p');
                                txtPSNR_CPFSK.textContent = 'Odnos signal-šum, tj. PSNR:';
                                txtPSNR_CPFSK.textContent = 'Peak Signal-to-Noise Ratio | PSNR: ';
                                divCPFSK.appendChild(txtPSNR_CPFSK);

                                let inpPSNR_CPFSK = document.createElement('input');
                                inpPSNR_CPFSK.value = PSNRc;
                                divCPFSK.appendChild(inpPSNR_CPFSK);

                                let whrA12 = document.createElement('hr');
                                whrA12.width = 300;
                                divCPFSK.appendChild(whrA12);

                            }, {once: true});

                        }, {once: true});

                        //Novi kod:

                    });

                    /////////////////////
                    ////////////////////
                    //Novi div: Nova modulacija
                    //27.2.2023. 13:37h
                    ////////////////////
                    ///////////////////

                    divCPM = document.createElement('div');
                    proJS.appendChild(divCPM);

                    let whrCPMa = document.createElement('hr');
                    whrCPMa.width = 600;
                    divCPM.appendChild(whrCPMa);

                    let txtCPM = document.createElement('p');
                    txtCPM.textContent = 'CPM modulacija';
                    txtCPM.textContent = 'CPM modulation';
                    txtCPM.style.fontWeight = 'bold';
                    divCPM.appendChild(txtCPM);

                    let whrCPMa1 = document.createElement('hr');
                    whrCPMa1.width = 600;
                    divCPM.appendChild(whrCPMa1);

                    let btnCPM = document.createElement('button');
                    btnCPM.textContent = 'CPM';
                    divCPM.appendChild(btnCPM);

                    btnCPM.addEventListener('click', function(){

                        //kod...
                        console.log('fc je', fc);

                        let txtVr512p = document.createElement('p');
                        txtVr512p.textContent = 'Vrednosti ulaznog signala za CPM modulaciju, tj. prvih 512 piksela ulazne slike: ';
                        txtVr512p.textContent = 'Input signal values for CPM modulation, i.e the first 512 pixels of the input image: ';
                        divCPM.appendChild(txtVr512p);

                        let txtaVr512p = document.createElement('textarea');
                        txtaVr512p.style.border = '2px dotted rgb(47, 38, 173)';
                        txtaVr512p.style.borderRadius = '10px';
                        divCPM.appendChild(txtaVr512p);

                        txtaVr512p.value = pikseliWAniz512;

                        let whrCPMa2 = document.createElement('hr');
                        whrCPMa2.width = 300;
                        divCPM.appendChild(whrCPMa2);

                        let txtPikseliWAnCPM = document.createElement('p');
                        txtPikseliWAnCPM.textContent = 'Broj elemenata (piksela) ulaznog signala: ';
                        txtPikseliWAnCPM.textContent = 'The number of elements (pixels) of the input signal: ';
                        divCPM.append(txtPikseliWAnCPM);
    
                        let inpPikseliWAnCPM = document.createElement('input');
                        inpPikseliWAnCPM.value = pikseliWAniz512.length;
                        divCPM.appendChild(inpPikseliWAnCPM);
    
                        let whrCPMa3 = document.createElement('hr');
                        whrCPMa3.width = 300;
                        divCPM.appendChild(whrCPMa3);
                        
                        ///////////////
                        ///////////////
                        //CPM
                        //////////////
                        /////////////

                        let txtGrafVrUlSigCPM = document.createElement('p');
                        txtGrafVrUlSigCPM.textContent = 'Grafičke vrednosti ulaznog signala za CPM modulaciju: ';
                        txtGrafVrUlSigCPM.textContent = 'Graphical input signal values for CPM modulation: ';
                        divCPM.appendChild(txtGrafVrUlSigCPM);

                        //11. kanvas
                        let canvasCPMa = document.createElement('canvas');
                        divCPM.appendChild(canvasCPMa);

                        canvasCPMa.style.width = '600px';

                        const ctxCPMa = canvasCPMa.getContext('2d');
                        const CPMaGraf = new Chart(ctxCPMa, {
                            type: 'bar',
                            data: {
                                labels: pikseliWAniz512,
                                datasets: [{
                                    //label: 'Ulazni signal (za CPM)',
                                    label: 'Input signal (for CPM)',
                                    data: pikseliWAniz512,
                                    backgroundColor: [
                                       'rgba(47, 38, 173, 1)',
                                       'rgba(47, 38, 173, 1)',
                                       'rgba(47, 38, 173, 1)'
                                    ],
                                    borderColor: [
                                        'black'
                                    ],
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                scales: {
                                    y: {
                                    beginAtZero: true
                                    }
                                }
                            }
                            });

                            let whrCPMa4 = document.createElement('hr');
                            whrCPMa4.width = 300;
                            divCPM.appendChild(whrCPMa4);

                            //
                            let M_arna_sekvenca = new Array();
                            let alfabet = new Array();

                            const alfabet_br_random = () => {
                                return 2**(Math.round(Math.random() + 1));
                            };

                            for(let i = 0; i < 512; i++){
                                alfabet.push(alfabet_br_random());
                            }

                            console.log('alfabet: ', alfabet);
                            M_arna_sekvenca = alfabet.map(a => Math.ceil(Math.log2(a)));
                            
                            let txtM_arna_sekvenca = document.createElement('p');
                            txtM_arna_sekvenca.textContent = 'M-arne vrednosti svakog elementa ulaznog CPM signala: ';
                            txtM_arna_sekvenca.textContent = 'M-values of each element of the input CPM signal: ';
                            divCPM.appendChild(txtM_arna_sekvenca);

                            let txtaM_arna_sekvenca = document.createElement('textarea');
                            txtaM_arna_sekvenca.style.border = '2px dotted rgb(47, 38, 173)';
                            txtaM_arna_sekvenca.style.borderRadius = '10px';
                            txtaM_arna_sekvenca.value = M_arna_sekvenca;
                            divCPM.appendChild(txtaM_arna_sekvenca);

                            let whrCPMa5 = document.createElement('hr');
                            whrCPMa5.width = 300;
                            divCPM.appendChild(whrCPMa5);

                            //let
                            let f_CPM = fc;
                            let wc = 2 * Math.PI * f_CPM;
                            let txtCPM_frekvencija = document.createElement('p');
                            txtCPM_frekvencija.textContent = 'Frekvencija kod CPM modulacije: ';
                            txtCPM_frekvencija.textContent = 'Frequency with CPM modulation: ';
                            divCPM.appendChild(txtCPM_frekvencija);

                            let inpCPM_frekvencija = document.createElement('input');
                            inpCPM_frekvencija.value = f_CPM +  'Hz';
                            divCPM.appendChild(inpCPM_frekvencija);

                            let txtCPM_T = document.createElement('p');
                            txtCPM_T.textContent = 'f_CPM = 1/T_CPM => T_CPM = 1/f_CPM';
                            divCPM.appendChild(txtCPM_T);

                            T_CPM = 1/(f_CPM);
                            let inpCPM_T = document.createElement('input');
                            inpCPM_T.value = T_CPM;
                            divCPM.appendChild(inpCPM_T);

                            t_CPM = T_CPM;

                            let txtCPMvremenskiRazmak = document.createElement('p');
                            txtCPMvremenskiRazmak.textContent = 'Vremenski razmak između simbola: ';
                            txtCPMvremenskiRazmak.textContent = 'Time gap between symbols: ';
                            divCPM.appendChild(txtCPMvremenskiRazmak);

                            let inpCPMvremenskiRazmak = document.createElement('input');
                            inpCPMvremenskiRazmak.value = t_CPM + ' s';
                            divCPM.appendChild(inpCPMvremenskiRazmak);

                            let txtCPMvremenskiNiz = document.createElement('p');
                            txtCPMvremenskiNiz.textContent = 'Vremenski niz kod CPM modulacije: ';
                            txtCPMvremenskiNiz.textContent = 'Time series in CPM modulation: ';
                            divCPM.appendChild(txtCPMvremenskiNiz);

                            let tcNiz = new Array();
                            let tcVr = 0;

                            for(let i = 0; i < pikseliWAniz512.length; i++){

                                tcVr += t_CPM;
                                tcNiz.push(tcVr);

                            }
                            
                            let txtaCPMvremenskiNiz = document.createElement('textarea');
                            txtaCPMvremenskiNiz.value = tcNiz;
                            divCPM.appendChild(txtaCPMvremenskiNiz);

                            let txtCPM_wi = document.createElement('p');
                            txtCPM_wi.textContent = 'Vrednosti wi kod CPM modulacije: ';
                            txtCPM_wi.textContent = 'Values of wi in CPM modulation: ';
                            divCPM.appendChild(txtCPM_wi);

                            let wiNiz = new Array();
                            let wiVr = 0;
                            wiNiz = tcNiz.map(a => ((2 * Math.PI) / a));

                            let txtaCPM_wi = document.createElement('textarea');
                            txtaCPM_wi.value = wiNiz;
                            divCPM.appendChild(txtaCPM_wi);

                            let CPMiNiz = new Array();
                            for(let i = 0; i < pikseliWAniz512.length; i++){
                                CPMiNiz.push(i);
                            }

                            console.log('CPMiNiz: ', CPMiNiz);

                            let txtCPMnizFaza = document.createElement('p');
                            txtCPMnizFaza.textContent = 'Niz faza kod CPM modulacije: ';
                            txtCPMnizFaza.textContent = 'An array of phases in CPM modulation: ';
                            divCPM.appendChild(txtCPMnizFaza);

                            let CPMnizFaza = new Array();

                            for(let i = 0; i < pikseliWAniz512.length; i++){
                                CPMnizFaza.push((2 * Math.PI)/(Math.random()));
                            }

                            let txtaCPMnizFaza = document.createElement('textarea');
                            txtaCPMnizFaza.value = CPMnizFaza;
                            divCPM.appendChild(txtaCPMnizFaza);

                            let txtCPMsignal = document.createElement('p');
                            txtCPMsignal.textContent = 'Numeričke vrednosti CPM modulacije: ';
                            txtCPMsignal.textContent = 'Numerical values of CPM modulation: ';
                            divCPM.appendChild(txtCPMsignal);

                            //wct
                            let wc_t = new Array();
                            wc_t = tcNiz.map(a => a * wc);
                            //pretp.
                            let CPMe = 1;
                            let CPMsignal = new Array();

                            //di*wi
                            let diwi = new Array();
                            diwi = M_arna_sekvenca.map((a, b) => a * wiNiz[b]);
                            CPMsignal;

                            //iT
                            iTniz = new Array();
                            iTniz = CPMiNiz.map(a => a * T_CPM);
                            console.log('t niz: ', tcNiz);
                            console.log('iT niz: ', iTniz);

                            //let i-iT
                            let t_iT = new Array();
                            t_iT = tcNiz.map((a, b) => (a - iTniz[b]));
                            console.log('t_iT niz: ', t_iT);

                            //diwi_t_iT
                            let diwi_t_iT = new Array();
                            diwi_t_iT = diwi.map((a, b) => a * t_iT[b]);
                            console.log('diwi_t_iT: ', diwi_t_iT);

                            //s1_niz:
                            let s1_niz = new Array();
                            s1_niz = wc_t.map((a, b) => a + diwi_t_iT[b]);

                            //s2_niz:
                            let s2_niz = new Array();
                            s2_niz = s1_niz.map((a, b) => a + CPMnizFaza[b]);

                            //CPM_signal_v1
                            let CPM_signal_v1 = new Array();
                            CPM_signal_v1 = s2_niz.map(a => Math.cos(a));

                            let CPM_signal = new Array();
                            CPM_signal = CPM_signal_v1.map(a => CPMe * a);

                            let txtaCPMsignal = document.createElement('textarea');
                            txtaCPMsignal.value = CPM_signal;
                            divCPM.appendChild(txtaCPMsignal);

                            let txtGrafVrCPM = document.createElement('p');
                            txtGrafVrCPM.textContent = 'Grafičke vrednosti CPM modulacije: ';
                            txtGrafVrCPM.textContent = 'Graphic values of CPM modulation: ';
                            divCPM.appendChild(txtGrafVrCPM);

                        //12. kanvas
                        let canvasCPMmod = document.createElement('canvas');
                        divCPM.appendChild(canvasCPMmod);

                        canvasCPMmod.style.width = '600px';

                        const ctxCPMmod = canvasCPMmod.getContext('2d');
                        const CPMaGrModf = new Chart(ctxCPMmod, {
                            type: 'bar',
                            data: {
                                labels: CPM_signal,
                                datasets: [{
                                    //label: 'Signal modulisan CPM modulacijom',
                                    label: 'Signal modulated by CPM modulation',
                                    data: CPM_signal,
                                    backgroundColor: [
                                       'rgba(47, 38, 173, 1)',
                                       'rgba(47, 38, 173, 1)',
                                       'rgba(47, 38, 173, 1)'
                                    ],
                                    borderColor: [
                                        'black'
                                    ],
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                scales: {
                                    y: {
                                    beginAtZero: true
                                    }
                                }
                            }
                            });

                            let whrCPMa6 = document.createElement('hr');
                            whrCPMa6.width = 300;
                            divCPM.appendChild(whrCPMa6);

                            
                            let whrCPMk = document.createElement('hr');
                            whrCPMk.style.width = 300;
                            divCPM.appendChild(whrCPMk);
        
                            let txt_wCPM = document.createElement('p');
                            txt_wCPM.textContent = 'Dodavanje watermark-a: ';
                            txt_wCPM.textContent = 'Adding a watermark: ';
                            divCPM.appendChild(txt_wCPM);
        
                            let btn_wDodavanjeCPM = document.createElement('button');
                            btn_wDodavanjeCPM.textContent = 'Adding';
                            divCPM.appendChild(btn_wDodavanjeCPM);
        
                            btn_wDodavanjeCPM.addEventListener('click', () => {
        
                                console.log('Vrednosti prvih 512 piksela slike: ', pikseliWAniz512)
                                console.log('Vrednosti CPM modulacije: ', CPM_signal);
                                
                                let wCPMniz1 = new Array();
                                //let wCPMniz1 = new Array();

                                wCPMniz1 = pikseliWAniz512.map((a, b) => Math.abs(Math.floor(a - CPM_signal[b])));
                                
                                /*
                                WCPMniz1 = pikseliWAniz512.map(function(a, b){

                                    if(pikseliWAniz512.indexOf(a) % 2 == 0){
                                        return Math.abs(Math.floor(a + CPM_signal[b]));
                                    } else {
                                        return Math.abs(Math.ceil(a - CPM_signal[b]));
                                    }

                                });
                                */

                                console.log('CPM watermark: ', wCPMniz1);

                                let txtwCPM = document.createElement('p');
                                txtwCPM.textContent = 'Vrednosti watermark-a nastalog CPM modulacijom: ';
                                txtwCPM.textContent = 'Values of the watermark created by CPM modulation: ';
                                divCPM.appendChild(txtwCPM);

                                let txtawCPM = document.createElement('textarea');
                                txtawCPM.textContent = wCPMniz1;
                                divCPM.appendChild(txtawCPM);

                                let txtSlikawCPM = document.createElement('p');
                                txtSlikawCPM.textContent = 'Slika sa dodatim watermark-om: ';
                                txtSlikawCPM.textContent = 'Image with added watermark: ';
                                divCPM.appendChild(txtSlikawCPM);

                                //Dodavanje watermark-a na sliku
                                slikawCPMdemo = new Array();
                                slikawCPMniz = new Array();
                                slikawCPMnizA = new Array();

                                platnowCPM = document.createElement('canvas');
                                divCPM.appendChild(platnowCPM);
                                ctxwCPM = platnowCPM.getContext('2d');

                                if(slikawAsl.width >= 1920){

                                    platnowCPM.width = slikawAsl.width;
                                    platnowCPM.height = slikawAsl.height;
    
                                } else {
    
                                    platnowCPM.width = slikawAsl.width;
                                    platnowCPM.height = slikawAsl.height;
    
                                }
    
                                sirinaA = slikawAsl.width;
                                visinaA = slikawAsl.height;

                                for(let i = 512; i < pikseliWAniz.length; i++){
                                    slikawCPMdemo.push(pikseliWAniz[i]);
                                }

                                slikawCPMniz = [].concat(wCPMniz1, slikawCPMdemo);
                                slikawCPMnizA = slikawCPMniz.slice(0, 4 * sirinaA * visinaA);
                                console.log('slikawCPMniz: ', slikawCPMniz);
                                slikawCPMnizAU8C = new Uint8ClampedArray(slikawCPMnizA);

                                slikawCPMpodaci = new ImageData(slikawCPMnizAU8C, sirinaA, visinaA);
                                ctxwCPM.putImageData(slikawCPMpodaci, 0, 0);


                                //------------
                                // Parametri: PSNR
                                let txtParametriwCPM = document.createElement('p');
                                txtParametriwCPM.textContent = 'Parametri za poređenje watermark-a (kod CPM modulacije): ';
                                txtParametriwCPM.textContent = 'Parameters for watermark comparison (with CPM modulation): ';
                                divCPM.appendChild(txtParametriwCPM);

                                let btnParametriwCPM = document.createElement('button');
                                btnParametriwCPM.textContent = 'Parametri';
                                btnParametriwCPM.textContent = 'Parameters';
                                divCPM.appendChild(btnParametriwCPM);

                                btnParametriwCPM.addEventListener('click', () => {

                                    console.log('CPM modulacija => PSNR parametar: ');

                                    //wtPSNR - ***********
                                    let cPSNR = document.createElement('p');
                                    cPSNR.textContent = 'Podaci o parametru PSNR: ';
                                    cPSNR.textContent = 'PSNR parameter data: ';
                                    //wtPSNR.textContent = 'PSNR parameter data: ';
                                    cPSNR.style.fontWeight = 'bold';
                                    divCPM.appendChild(cPSNR);
                        
                                    let cPhr1 = document.createElement('hr');
                                    cPhr1.width = 300;
                                    divCPM.appendChild(cPhr1);
                        
                                    //dimSlika
                                    //dimSlika = slikawAsl.width * slikawAsl.height;
                                    console.log('Širina slike: ', slikawAsl.width);
                                    console.log('Visina slike: ', slikawAsl.height);
                                    console.log('Dimenzija slika: ', dimSlika);
                        
                                    let cDimSlika = document.createElement('p');
                                    cDimSlika.textContent = 'Dimenzije slike u pikselima: ';
                                    cDimSlika.textContent = 'Image dimensions in pixels: ';
                                    //wDimSlika.textContent = 'Image dimensions in pixels: ';
                                    divCPM.appendChild(cDimSlika);
                        
                                    let inpCdimSlika = document.createElement('input');
                                    inpCdimSlika.value = `${slikawAsl.width} x ${slikawAsl.height}`;
                                    divCPM.appendChild(inpCdimSlika);
                        
                                    /*
                                    let whrA6b = document.createElement('hr');
                                    whrA6b.width = 300;
                                    divA7.appendChild(whrA6b);
                                    */
                        
                                    //S1
                                    //S1 = pikseliWAniz.reduce((a, b) => a + b, 0);
                                    //console.log('S1 = ', S1);
                        
                                    let S1_CPM = document.createElement('p');
                                    S1_CPM.textContent = 'Zbir svih piksela ulazne slike: ';
                                    S1_CPM.textContent = 'Sum of all pixels of the input image: ';
                                    //wS1.textContent = 'Sum of all pixels of the input image: ';
                                    divCPM.appendChild(S1_CPM);
                        
                                    let inpS1_CPM = document.createElement('input');
                                    inpS1_CPM.value = S1;
                                    divCPM.appendChild(inpS1_CPM);

                                    let wS2_CPM = document.createElement('p');
                                    wS2_CPM.textContent = 'Zbir svih piksela slike sa vodenom oznakom: ';
                                    wS2_CPM.textContent = 'Sum of all watermarked image pixels: ';
                                    divCPM.appendChild(wS2_CPM);

                                    console.log('slikawCPMnizA: ', slikawCPMnizA);

                                    S2_CPM = new Number();

                                    const testwCPM = (a) =>  {
                                        return a >= 0;
                                    };

                                    slikawCPMnizA_f = slikawCPMnizA.filter(testwCPM);
                                    console.log('slikawCPMnizA_f', slikawCPMnizA_f);


                                    S2_CPM = slikawCPMnizA.reduce((a, b) => a + b, 0);

                                    console.log('S-BPSK-FHSS: ', S2);
                                    console.log('S2-CPFSK: ', S2c);
                                    console.log('S2_CPM: ', S2_CPM);

                                    let inpS2_CPM = document.createElement('input');
                                    inpS2_CPM.value = S2_CPM;
                                    divCPM.appendChild(inpS2_CPM);

                                    //Proračun srednje kvadratne greške
                                    let srKvGrCPM = (S1 - S2_CPM) **2 / dimSlika;
                                    let srKvGrCPMniz = new Array();
                                    srKvGrCPMniz = pikseliWAniz512.map((a, b) => (a - slikawCPMnizA_f[b])**2);
                                    let srKvGrCPMvr = srKvGrCPMniz.reduce((a, b) => a + b, 0);
                                    let srednjaKvadratnaGreskaCPM = srKvGrCPMvr / dimSlika;
                                    let PSNR_CPM = 10 * Math.log10(256**2/srednjaKvadratnaGreskaCPM);

                                    console.log('PSNR_BPSK = ', PSNR);
                                    console.log('PSNR_CPFSK = ', PSNRc);
                                    console.log('PSNR_CPM = ', PSNR_CPM);

                                    let txtSrKvVrCPM = document.createElement('p');
                                    txtSrKvVrCPM.textContent = 'Srednja kvadratna greška: ';
                                    txtSrKvVrCPM.textContent = 'Mean square error | MSE:  ';
                                    //wSrKvVr.textContent = 'Mean square error - MSE: ';
                                    divCPM.appendChild(txtSrKvVrCPM);
                
                                    let inpSrKvCPM = document.createElement('input');
                                    inpSrKvCPM.value = srednjaKvadratnaGreskaCPM;
                                    divCPM.appendChild(inpSrKvCPM);

                                    console.log('Srednja kvadratna greška kod BPSK: ', srednjaKvadratnaGreskaA);
                                    console.log('Srednja kvadratna greška kod CPFSK: ', srednjaKvadratnaGreskaCPFSK);
                                    console.log('Srednja kvadratna greška kod CPM: ', srednjaKvadratnaGreskaCPM);

                                    let txtPSNR_CPM = document.createElement('p');
                                    txtPSNR_CPM.textContent = 'Odnos signal-šum, tj. PSNR:';
                                    txtPSNR_CPM.textContent = 'Peak Signal-to-Noise Ratio | PSNR: ';
                                    divCPM.appendChild(txtPSNR_CPM);

                                    let inpPSNR_CPM = document.createElement('input');
                                    inpPSNR_CPM.value = PSNR_CPM;
                                    divCPM.appendChild(inpPSNR_CPM);

                                    let whrA13 = document.createElement('hr');
                                    whrA13.width = 300;
                                    divCPM.appendChild(whrA13);                                    
                                
                                    /*
                                    //wtPSNR - ***********
                                    let txtwCPM_PSNR = document.createElement('p');
                                    txtwCPM_PSNR.textContent = 'Podaci o parametru PSNR: ';
                                    //wtPSNR.textContent = 'PSNR parameter data: ';
                                    txtwCPM_PSNR.style.fontWeight = 'bold';
                                    divCPM.appendChild(txtwCPM_PSNR);
                           
                                    let hrCPM1 = document.createElement('hr');
                                    hrCPM1.width = 300;
                                    divCPM.appendChild(hrCPM1);
                           
                                    //dimSlika
                                    //dimSlika = slikawAsl.width * slikawAsl.height;
                                    console.log('Širina slike: ', slikawAsl.width);
                                    console.log('Visina slike: ', slikawAsl.height);
                                    console.log('Dimenzija slika: ', dimSlika);
                           
                                    let dimSlikaCPM = document.createElement('p');
                                    dimSlikaCPM.textContent = 'Dimenzije slike u pikselima: ';
                                    //wDimSlika.textContent = 'Image dimensions in pixels: ';
                                    divCPM.appendChild(dimSlikaCPM);
                           
                                    let inpDimSlikaCPM = document.createElement('input');
                                    inpDimSlikaCPM.value = `${slikawAsl.width} x ${slikawAsl.height}`;
                                    divCPM.appendChild(inpDimSlikaCPM);

                                       //Proračun srednje kvadratne greške
                                       let srKvGrCPFSK = (S1 - S2c)**2 / dimSlika;
                                       let srKvGrCPFSKniz = new Array();
                                       srKvGrCPFSKniz = pikseliWAniz512.map((a, b) => (a - slikawCPFSKnizA[b])**2);
                                       let srKvGrCPFSKvr = srKvGrCPFSKniz.reduce((a, b) => a + b, 0);
                                       let srednjaKvadratnaGreskaCPFSK = srKvGrCPFSKvr / dimSlika;
                                       let PSNRc = 10 * Math.log10(255**2 / srednjaKvadratnaGreskaCPFSK);
       
                                       console.log('PSNR_BPSK = ', PSNR);
                                       console.log('PSNR_CPFSK = ', PSNRc);
       
                                       let txtSrKvVrC = document.createElement('p');
                                       txtSrKvVrC.textContent = 'Srednja kvadratna greška: ';
                                       //wSrKvVr.textContent = 'Mean square error - MSE: ';
                                       divCPM.appendChild(txtSrKvVrC);
                   
                                       let inpSrKvC = document.createElement('input');
                                       inpSrKvC.value = srednjaKvadratnaGreskaCPFSK;
                                       divCPM.appendChild(inpSrKvC);
       
                                       console.log('Srednja kvadratna greška kod BPSK: ', srednjaKvadratnaGreskaA);
                                       console.log('Srednja kvadratna greška kod CPFSK: ', srednjaKvadratnaGreskaCPFSK);
       
                                       let txtPSNR_CPFSK = document.createElement('p');
                                       txtPSNR_CPFSK.textContent = 'Odnos signal-šum, tj. PSNR:';
                                       divCPM.appendChild(txtPSNR_CPFSK);
       
                                       let inpPSNR_CPFSK = document.createElement('input');
                                       inpPSNR_CPFSK.value = PSNRc;
                                       divCPM.appendChild(inpPSNR_CPFSK);
       
                                       let whrA12 = document.createElement('hr');
                                       whrA12.width = 300;
                                       divCPM.appendChild(whrA12);
                                    */

                                }, {once: 'true'});


                            }, {once: 'true'});


                    }, {once: true});

            


                    //////////////////////
                    /////////////////////
                    // Kraj div elementa: divCPM
                    ////////////////////
                    ////////////////////
                });

            }

        });


    }
    
    slikawA.addEventListener('click', slikaAf);

}