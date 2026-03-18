/* ══════════════════════════════════════════════════════════════
   aatel — script.js
   Anti-AI Training Ethical License — v2.1 + IC v2.1
   Generazione licenze 100% locale nel browser
   ══════════════════════════════════════════════════════════════ */

  /* ── LANG ── */
  function setLang(lang) {
    document.body.className = 'lang-' + lang;
    document.getElementById('btn-it').className = 'lang-btn' + (lang==='it' ? ' active' : '');
    document.getElementById('btn-en').className = 'lang-btn' + (lang==='en' ? ' active' : '');
    document.documentElement.lang = lang;
  }

  /* ── THEME DROPDOWN ── */
  var THEME_SWATCHES = {
    pelle:'#c8391a', ghiaccio:'#1565c0', bosco:'#2e7d32', viola:'#7b1fa2', alba:'#d4680a',
    carta:'#c0392b', cielo:'#0077cc', menta:'#00897b', cipria:'#c2185b', limone:'#9e9000',
    carbone:'#ff6b35', rosso:'#d32f2f', oceano:'#00bcd4', tabacco:'#d4a054', notte:'#5c8aff'
  };
  function toggleThemePicker(e) {
    e.stopPropagation();
    var picker = document.getElementById('theme-picker');
    var isOpen = picker.classList.contains('open');
    picker.classList.toggle('open', !isOpen);
    document.getElementById('theme-trigger').setAttribute('aria-expanded', String(!isOpen));
  }
  function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    var dot = document.querySelector('.theme-trigger .t-dot');
    if (dot && THEME_SWATCHES[theme]) dot.style.background = THEME_SWATCHES[theme];
    document.querySelectorAll('.theme-option').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
    });
    var picker = document.getElementById('theme-picker');
    picker.classList.remove('open');
    document.getElementById('theme-trigger').setAttribute('aria-expanded', 'false');
    try { localStorage.setItem('aatel-theme', theme); } catch(e) {}
  }
  document.addEventListener('click', function(e) {
    var picker = document.getElementById('theme-picker');
    if (picker && !picker.contains(e.target)) {
      picker.classList.remove('open');
      document.getElementById('theme-trigger').setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { var picker = document.getElementById('theme-picker'); if (picker) picker.classList.remove('open'); }
  });
  (function() {
    try { var saved = localStorage.getItem('aatel-theme'); if (saved && THEME_SWATCHES[saved]) setTheme(saved); } catch(e) {}
  })();

  /* ── ACCORDION ── */
  function toggleAcc(header) {
    var item = header.parentElement;
    var body = item.querySelector('.acc-body');
    var isOpen = item.classList.contains('open');
    var acc = item.closest('.accordion');
    acc.querySelectorAll('.acc-item.open').forEach(function(el) {
      el.classList.remove('open');
      el.querySelector('.acc-body').style.maxHeight = '0';
    });
    if (!isOpen) {
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  }

  /* ── COPY ── */
  function copyLicense() {
    var text = document.getElementById('copy-block').textContent;
    navigator.clipboard.writeText(text).then(function() {
      document.querySelectorAll('.copy-btn').forEach(function(btn) {
        var orig = btn.textContent;
        btn.textContent = btn.getAttribute('data-lang') === 'it' ? '✓ Copiato!' : '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(function() { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
      });
    });
  }

  function copyICLicense() {
    var text = document.getElementById('ic-copy-block').textContent;
    navigator.clipboard.writeText(text).then(function() {
      var btns = document.querySelectorAll('#testo-ic .copy-btn');
      btns.forEach(function(btn) {
        var orig = btn.textContent;
        btn.textContent = btn.getAttribute('data-lang') === 'it' ? '✓ Copiato!' : '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(function() { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
      });
    });
  }

  /* ── REVEAL ── */
  var ro = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function(el) { ro.observe(el); });

  /* ══════════════════════════════════════════════════════════════
     LICENSE TEMPLATES — aatel v2.1
     ══════════════════════════════════════════════════════════════ */

  var LICENSE_IT = `ANTI-AI TRAINING Ethical License (aatel) — Versione 2.1

Copyright (c) {{ANNO}} {{NOME}}

È concessa, gratuitamente, a chiunque ottenga una copia del presente software
e dei file di documentazione associati (il "Software"), l'autorizzazione a
trattare il Software senza restrizioni, inclusi i diritti di utilizzare, copiare,
modificare, unire, pubblicare, distribuire, sublicenziare e/o vendere copie del
Software, a condizione che siano rispettate le seguenti condizioni:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 0 — DEFINIZIONI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

0.1 — "ADDESTRAMENTO AI"
Include, ma non limitato a:
  (a) Apprendimento supervisionato, non supervisionato, con rinforzo
  (b) Fine-tuning, adattamento di dominio, transfer learning
  (c) Distillazione, quantizzazione, potatura (compressione modello)
  (d) Generazione di dati sintetici o aumentati derivati dal Software
  (e) Allineamento (RLHF, DPO, preference optimization, similari)
  (f) Valutazione o benchmarking di modelli AI/ML usando il Software
  (g) Estrazione di feature o generazione di embedding per pipeline ML

NON include:
  (i) Inferenza (esecuzione di un modello addestrato)
  (ii) Caching o archiviazione temporanea per query utente
  (iii) Citazione o riferimento al Software nella documentazione

0.2 — "USO MILITARE"
Include:
  (a) Uso diretto da forze armate, guardie nazionali, milizie, riserve attive
  (b) Uso da agenzie di intelligence o sicurezza (NSA, MI6, DGSE, similari)
  (c) Contractor (primario o subappaltatore) che fornisce servizi a (a)-(b)
  (d) Sviluppo armamenti, sistemi di targeting, piattaforme cyber warfare
  (e) Sorveglianza militare, ricognizione, sistemi comando battaglia
  (f) Dual-use: sistemi adattabili per scopi militari
  (g) Uso indiretto: trasferimento a terzi per uso militare

NON include:
  (i) Applicazione della legge civile (polizia, guardia di frontiera)
  (ii) Cybersecurity difensiva (protezione sistemi non-militari)
  (iii) Ricerca accademica su tecnologia militare (con intento pubblicazione)

0.3 — "ENTITÀ COMMERCIALE"
Qualsiasi persona fisica, organizzazione o persona giuridica che:
  - Genera ricavi da beni, servizi o proprietà intellettuale
  - Ha fatturato lordo annuo ≥ {{SOGLIA}} {{VALUTA}}
  - Opera con finalità lucro o scopo commerciale
  - NON è classificata come non-profit secondo Articolo 5.6

0.4 — "ORGANIZZAZIONE NON-PROFIT"
Qualsiasi ente legalmente registrato che:
  - Ha meccanismi di finanziamento trasparenti (divulgazione pubblica donatori/budget)
  - Vieta distribuzione profitti o eccedenze ai membri
  - Non ha ricavi commerciali da attività core
  - È registrato come ente caritativo, ONG, associazione, cooperativa (modello non-profit)
  - Include: ONG, enti caritativi, istituzioni accademiche, enti ricerca pubblica,
    organizzazioni terzo settore, cooperative sociali
  - ESCLUDE: startup finanziate da VC, aziende tech, contractor governo

0.5 — "VIOLAZIONE"
Utilizzo del Software in violazione degli Articoli 2, 3 o 4 della presente
licenza senza opportuna notifica e pagamento secondo Articoli 4 e 5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 1 — ATTRIBUZIONE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

L'avviso di copyright sopra riportato e il presente avviso di autorizzazione
devono essere inclusi in tutte le copie o parti sostanziali del Software.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 2 — DIVIETO DI UTILIZZO PER L'ADDESTRAMENTO DI MODELLI AI/ML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

È ESPRESSAMENTE E ASSOLUTAMENTE VIETATO, agendo direttamente o indirettamente:

  (a) Utilizzare il Software come dati di addestramento, fine-tuning, pre-addestramento
      o valutazione per qualsiasi sistema AI, ML, deep learning o LLM
      (come definito in Articolo 0.1);

  (b) Utilizzare l'output o componenti derivate per addestrare, ottimizzare,
      distillare, allineare o valutare qualsiasi modello AI o ML;

  (c) Incorporare il Software in pipeline automatizzate di raccolta dati per AI/ML;

  (d) Generare dataset sintetici o aumentati per l'addestramento di modelli AI/ML;

  (e) Trasferire il Software a terzi per uno qualsiasi degli scopi sopra descritti.

Tale divieto si applica INDIPENDENTEMENTE DALLO SCOPO — commerciale, accademico,
governativo, di ricerca, non-profit o personale.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 3 — DIVIETO DI UTILIZZO MILITARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Il Software non può essere utilizzato per alcuno scopo militare, paramilitare
o di difesa armata, come definito in Articolo 0.2. Questo include:

  (a) Forze armate, guardie nazionali, milizie, agenzie di intelligence;

  (b) Contractor primari e subappaltatori che forniscono servizi a (a);

  (c) Sviluppo di armamenti, droni militari, sistemi di targeting o sorveglianza;

  (d) Cyber warfare, guerra elettronica o operazioni informatiche militari;

  (e) Sistemi dual-use adattabili per uso militare;

  (f) Utilizzo indiretto tramite terzi per conto di organizzazioni militari.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 4 — OBBLIGO DI NOTIFICA PER LE ENTITÀ COMMERCIALI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4.1 — OBBLIGO DI NOTIFICA
Inviare email PRIMA di avviare l'utilizzo a: {{EMAIL}}

4.2 — La notifica deve contenere:
  (a) Denominazione sociale completa e numero registrazione aziendale
  (b) Codice fiscale / P.IVA (se applicabile)
  (c) Indirizzo aziendale e giurisdizione
  (d) Descrizione dell'uso previsto
  (e) Data inizio prevista
  (f) Fatturato lordo annuo dichiarato (per determinare livello tariffario Art. 5)
  (g) Nome, titolo e contatto del responsabile conformità designato
  (h) Dichiarazione: "Certifico che il Software NON sarà utilizzato per
      addestramento AI o scopi militari come definito negli Articoli 2 e 3."

4.3 — Variazioni sostanziali devono comportare notifica aggiornata entro 30 giorni:
  (a) Cambio di status legale o proprietà
  (b) Superamento soglia di fatturato (sopra/sotto {{SOGLIA}} {{VALUTA}})
  (c) Cambio di descrizione o scopo d'uso
  (d) Cambio responsabile conformità

4.4 — Superamento Soglia Tariffaria
  Se il fatturato annuo supera la soglia di {{SOGLIA}} {{VALUTA}}:
  - Notificare entro 60 giorni dalla fine dell'esercizio fiscale in cui superamento avvenuto
  - Adeguare i pagamenti dal 1° giorno dell'esercizio fiscale successivo
  - Mancata notifica = penale retroattiva (vedi Articolo 7.3)

4.5 — Cessazione
  Se l'utilizzo è terminato, inviare email di cessazione entro 30 giorni a {{EMAIL}}

4.6 — REPORTING DI CONFORMITÀ CONTINUATIVO

4.6.1 OBBLIGO DI REPORTING MENSILE
Le entità commerciali Livello A e B devono inviare:
  (a) Entro il 5° giorno solare di ogni mese:
      - Dichiarazione certificata di conformità
      - Variazioni materiali d'uso o attività
      - Certificazione del pagamento effettuato
  (b) Mancato reporting = presunzione di variazione materiale richiedente riclassificazione
  (c) Formato: Email a {{EMAIL}} con oggetto "[ANNO] MONTHLY COMPLIANCE REPORT"

4.6.2 CERTIFICAZIONE AUDIT ANNUALE (SOLO LIVELLO B)
Le entità Livello B devono fornire annualmente (entro 90 giorni da fine esercizio):
  (a) Dichiarazione autocertificata fatturato (firmata da dirigente autorizzato)
  (b) Copia della dichiarazione fiscale o lettera commercialista certificato
  (c) Dichiarazione di nessun cambio struttura aziendale materiale
  (d) Conferma di continuazione/cessazione utilizzo

4.6.3 CONSERVAZIONE DOCUMENTAZIONE
Tutte le entità commerciali devono conservare:
  (a) Registri pagamenti: 24 mesi
  (b) Registri utilizzo (se applicabile): 24 mesi
  (c) Certificazioni conformità: 24 mesi
  (d) Disponibili per titolare su richiesta entro 15 giorni

4.6.4 DIRITTI DI AUDIT
Il titolare può effettuare audit:
  (a) Sulla base di ragionevole sospetta non-conformità
  (b) Non più di una volta per anno solare per entità
  (c) Tramite revisione documentale remota o ispezione in loco
  (d) Tutti i costi sostenuti da titolare SE non-conformità < 10%
  (e) Se non-conformità riscontrata: costi audit sono penale aggiuntiva

AVVERTENZA: Utilizzo senza notifica = VIOLAZIONE MATERIALE con risoluzione
automatica di tutti i diritti e attivazione penali (Articolo 7).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 5 — STRUTTURA TARIFFARIA E OBBLIGHI DI PAGAMENTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5.1 — LIVELLO A (Fatturato annuo < {{SOGLIA}} {{VALUTA}})
Canone mensile fisso: {{IMPORTO}} {{VALUTA}} / mese
Nessuna componente aggiuntiva basata sul fatturato.
Dovuto dal 1° di ogni mese, a partire dal mese di ricezione notifica.

5.2 — LIVELLO B (Fatturato annuo ≥ {{SOGLIA}} {{VALUTA}})
Canone mensile fisso: {{IMPORTO}} {{VALUTA}} / mese, PIÙ
Quota variabile: {{PERCENTUALE}}% del fatturato lordo annuo ÷ 12 al mese.

Le entità di Livello B devono fornire una dichiarazione annuale autocertificata
del fatturato entro 90 giorni dalla chiusura di ogni esercizio fiscale. Il
titolare può richiedere documentazione di supporto (dichiarazioni fiscali,
bilanci) per verificare le dichiarazioni.

Esempio di calcolo:
  Soglia: {{SOGLIA}} {{VALUTA}}
  Canone fisso: {{IMPORTO}} {{VALUTA}}/mese
  Percentuale: {{PERCENTUALE}}%
  Fatturato annuo: {{SOGLIA}} × 2 {{VALUTA}}
  Pagamento mensile: {{IMPORTO}} + (({{SOGLIA}} × 2 × {{PERCENTUALE}}) ÷ 12) {{VALUTA}}

5.3 — LIBERI PROFESSIONISTI E LAVORATORI AUTONOMI
Trattati come Livello A se reddito netto annuo < {{SOGLIA}} {{VALUTA}},
come Livello B se reddito netto annuo ≥ {{SOGLIA}} {{VALUTA}}.
Fornire dichiarazione dei redditi o lettera di certificazione del commercialista.

5.4 — TERMINI E METODO DI PAGAMENTO
Pagamento entro il 1° giorno solare di ogni mese.
Metodo accettato: {{PAGAMENTO}}
Istruzioni di pagamento complete: {{PAYINSTR}}
Conservare prove documentali di tutti i pagamenti per almeno 24 mesi.
Registri di pagamento devono essere forniti su richiesta (entro 15 giorni).

5.5 — INADEMPIMENTO
Mancato pagamento per 2+ mesi consecutivi = REVOCA AUTOMATICA E IMMEDIATA
di tutti i diritti. Ripristino solo al verificarsi di:
  (a) Saldo integrale di tutti gli arretrati
  (b) Penale ritardo = 20% degli importi non pagati
  (c) Conferma scritta di regolarizzazione

5.6 — ESENZIONI
Privati (uso personale non commerciale) e organizzazioni non-profit
(come definite in Articolo 0.4) sono esonerate dall'obbligo di pagamento.
Verifica esenzione: non-profit devono comunque fornire notifica (Articolo 4.1)
con prova di status non-profit (certificato registrazione).

5.7 — CLAUSOLA DI SALVAGUARDIA — ADEGUAMENTO ANNUALE ALL'INFLAZIONE
Il titolare si riserva il diritto, a sua esclusiva discrezione, di adeguare
una volta per anno solare: il canone fisso, la soglia di fatturato e/o la
percentuale sul fatturato.

Meccanismo: l'adeguamento al rialzo non può superare il tasso annuo HICP
(Eurostat, UE) o il CPI nazionale del titolare per il periodo di riferimento
più recente. L'adeguamento al ribasso è sempre possibile.

Notifica obbligatoria: almeno 60 giorni prima dell'entrata in vigore, con
indicazione dei parametri precedenti, dei nuovi parametri, dell'indice
utilizzato, il calcolo e la data di decorrenza.

Effetto del silenzio: nessuna risposta scritta entro 30 giorni dalla
ricezione della notifica = accettazione tacita. In caso di rifiuto,
cessare l'uso e notificarlo entro gli stessi 30 giorni.

Protezione primo anno: nessun adeguamento applicabile nei primi 12 mesi
dall'inizio dell'utilizzo da parte di una determinata entità.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 6 — RIDISTRIBUZIONE CON LICENZA INVARIATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Qualsiasi ridistribuzione deve includere questa licenza nella sua interezza,
senza modifiche. Non possono essere imposte restrizioni aggiuntive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 7 — SORVEGLIANZA, ESECUZIONE E RIMEDI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7.1 — FATTISPECIE DI VIOLAZIONE
Una violazione si verifica in caso di:
  (a) Utilizzo del Software per addestramento AI (Articolo 2) senza consenso scritto
  (b) Utilizzo del Software per scopi militari (Articolo 3) senza consenso
  (c) Utilizzo da parte di entità commerciale senza notifica e pagamento (Art. 4-5)
  (d) Mancato pagamento per 1+ mese (dopo notifica)
  (e) Dichiarazione falsa di status non-profit o categoria tariffaria
  (f) Trasferimento a terzi in violazione dell'Articolo 2(e)

7.2 — NOTIFICA CONTROVERSIA E PERIODO DI REGOLARIZZAZIONE
All'accertamento di violazione, il titolare invia notifica formale al licenziatario
con periodo di 15 giorni per regolarizzazione. La notifica deve specificare:
  (a) Descrizione della violazione presunta
  (b) Sezione/i della licenza rilevanti
  (c) Azione correttiva richiesta
  (d) Termine per regolarizzazione (15 giorni solari)

7.3 — SANZIONI E RIMEDI PER VIOLAZIONE
Se la violazione non è regolarizzata entro 15 giorni, si applicano:

RIMEDI AUTOMATICI:
  (a) Revoca immediata e incondizionata di tutti i diritti secondo licenza
  (b) Ordine di cessazione: cessare l'uso entro 15 giorni
  (c) Cancellazione copie: distruggere Software entro 30 giorni
  (d) Audit obbligatorio: fornire copie backup, derivati o utilizzi

PENALI FINANZIARIE:
  (a) Casi mancato pagamento: penale = 3× importi non pagati (minimo {{IMPORTO}} {{VALUTA}})
  (b) Violazioni addestramento AI: penale = 3× canone annuo per quell'entità
      (o canone annuo stimato se dimensione entità non determinabile)
  (c) Violazioni uso militare: penale = 5× canone annuo stimato
  (d) Dichiarazione falsa: penale = 2× importi che avrebbero dovuto essere pagati

RIMEDIO DI PUBBLICAZIONE:
  (a) Il titolare può pubblicare nome, data e natura della violazione su registro
      pubblico o sito web, per 12 mesi, a meno che controversia sia risolta.

CESSIONE DIRITTI:
  (a) Il licenziatario non può contestare o obiettare la pubblicazione.
  (b) Il titolare può cedere diritti di recupero penale a counsel legale o
      agenzie di riscossione terze.

7.4 — GIURISDIZIONE E FORO COMPETENTE
Legge applicabile: Diritto italiano + Normativa UE
  - Legge sul Diritto d'Autore italiano (L.d.A. 633/1941)
  - Direttiva UE 2019/790 (Mercato unico digitale)
  - Regolamento UE 2024/1689 (AI Act)
  - Codice civile italiano (Art. 1218 inadempimento, Art. 1382 danno)

Foro esclusivo: Tribunale civile di {{CITTÀ}}, Italia
  - Tutte le controversie, reclami e azioni di esecuzione devono essere presentati
    esclusivamente presso il tribunale civile di {{CITTÀ}}, Italia.
  - Entrambe le parti si sottomettono alla competenza personale di {{CITTÀ}}, Italia.
  - Qualsiasi procedimento in altra giurisdizione è considerato nullo.

La competenza NON cambia per:
  (a) Sede legale del licenziatario in altro paese
  (b) Ubicazione infrastruttura o giurisdizione cloud hosting
  (c) Nazionalità o residenza del personale
  (d) Riorganizzazioni societarie, fusioni o acquisizioni post-accettazione
  (e) Qualsiasi affermazione che accettazione licenza violi legge locale

RINUNCIA A IMMUNITÀ:
  Qualsiasi entità che utilizza il Software rinuncia implicitamente a:
  - Immunità sovrana
  - Immunità diplomatica
  - Contestazione giurisdizionale presso Tribunale di {{CITTÀ}}, Italia

7.5 — DIRITTO A CONTENZIOSO E AZIONE COLLETTIVA
Il titolare può:
  (a) Intentare causa direttamente presso Tribunale di {{CITTÀ}}, Italia
  (b) Aderire o promuovere class action contro molteplici violatori
  (c) Cedere diritti a counsel legale o agenzie di riscossione
  (d) Segnalare violazioni a autorità competenti

Il licenziatario rinuncia al diritto di:
  (a) Forum shopping o contestazione giurisdizione
  (b) Richiedere arbitrato al posto di procedimento giudiziale
  (c) Richiedere giudizio con giuria

7.6 — PRESUNZIONE DI DANNO
Se violazione è provata, danno minimo è presunto come:
  (a) Mancato pagamento: 3× importi non pagati + spese
  (b) Addestramento AI non autorizzato: 3× canone annuo stimato + ban accesso 1 anno
  (c) Uso militare: 5× canone annuo stimato + ban accesso permanente
  (d) Dichiarazione falsa: 2× fee classificati erroneamente + danno reputazionale

Il licenziatario ha onere della prova per ridurre danno sotto importi presunti.

7.7 — DIRITTO DI ISPEZIONE E AUDIT
Il titolare o auditor designato può:
  (a) Richiedere accesso a log utilizzo Software (se disponibili)
  (b) Richiedere prova di cessazione o cancellazione
  (c) Condurre audit remoto o in loco di conformità
  (d) Richiedere dichiarazione giurata di non-utilizzo
  (e) Impegnare auditor indipendente terzo (a spese licenziatario, se
      non-conformità confermata)

Il licenziatario deve rispondere entro 30 giorni o perde diritto di contestare danno.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 7bis — ENFORCEMENT TRANSFRONTALIERO E ESCALATION NORMATIVA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7bis.1 — ENFORCEMENT PER ENTITÀ AL DI FUORI DELL'ITALIA

Per licenziatari con sede legale al di fuori dell'Italia o dell'UE:
  (a) Il titolare può avviare enforcement in qualsiasi giurisdizione dove
      il licenziatario opera, mantiene infrastruttura, o ha ricavi
  (b) Il titolare può segnalare violazioni a:
      - Tribunali nazionali competenti in giurisdizioni operative
      - Autorità nazionali protezione dati
      - Organismi internazionali enforcement IP
      - Organismi enforcement UE (se operante in UE)

7bis.2 — ESCALATION NORMATIVA (ENTITÀ UE)

Per entità che operano in UE:
  (a) Violazioni possono essere segnalate a:
      - Autorità nazionale protezione dati (dove headquartered)
      - Coordinatore Servizi Digitali UE (per violazioni piattaforma)
      - EDPB (European Data Protection Board) se coinvolto trattamento dati
      - Regolatore di settore (se applicabile)
  (b) Violazioni possono attivare indagine secondo:
      - Digital Markets Act (se entità è gatekeeper)
      - AI Act (se AI training commerciale)
      - Digital Services Act (se violazione piattaforma)

7bis.3 — PRESUNZIONE DI RESPONSABILITÀ (NON-DIVULGAZIONE)

Se licenziatario non divulga dati tracciamento/utilizzo su richiesta formale:
  (a) Onere della prova si sposta interamente al licenziatario
  (b) Il titolare può presumere:
      - 100% dell'attività commerciale rilevante coinvolge Software
      - Violatore ha intenzionalmente celato utilizzo
      - Danno statutario è appropriato
  (c) Mancata risposta entro 30 giorni = presunzione automatica

7bis.4 — ENFORCEMENT BENI

Per violatori che operano in UE:
  (a) Il titolare può richiedere da tribunale italiano:
      - Ordini di congelamento beni UE-wide
      - Ordini conformità esecutivi in UE (Bruxelles I bis)
      - Ingiunzioni di sospensione servizi
      - Ordini rimozione da marketplace UE
  (b) Non-conformità a ordini tribunale italiano può attivare:
      - Segnalazione a autorità enforcement UE
      - Segnalazione a autorità competenti
      - Avviso pubblico di non-conformità
      - Implementazione congelamento beni secondo normative UE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 8 — REGISTRO PUBBLICO DI VIOLAZIONI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8.1 — PUBBLICAZIONE REGISTRO VIOLAZIONI
Il titolare si riserva il diritto di pubblicare violazioni verificate su un
registro pubblico presso {{REGISTRY_URL}} o piattaforma equivalente, incluso:
  (a) Nome entità o persona violatrice
  (b) Data scoperta violazione e notifica emessa (Art. 7.2)
  (c) Natura della violazione (mancato pagamento, addestramento non autorizzato,
      dichiarazione falsa)
  (d) Importi dovuti (se violazione finanziaria)
  (e) Status corrente (contestato, regolato, risolto, in contenzioso, non-conforme)

8.2 — CONDIZIONI DI RIMOZIONE
Un record di violazione è rimosso dal registro al verificarsi di:
  (a) Pagamento integrale di tutti gli importi dovuti (principale + penali)
  (b) Cessazione della violazione + prova scritta di conformità
  (c) Accordo transattivo scritto reciproco
  (d) Sentenza giudiziale o lodo arbitrale a favore del licenziatario
  (e) Scadenza termini di prescrizione (24 mesi dalla scoperta per Art. 7.2)

8.3 — EFFETTO DEL REGISTRO
Pubblicazione di una violazione:
  (a) Serve come notifica costruttiva ad altri titolari
  (b) Può essere considerato da autorità enforcement (DMA, AI Act) in indagini
  (c) Può influire su reputazione aziendale, standing credito e relazioni terze parti
  (d) Non costituisce diffamazione se pubblicato in buona fede con accuratezza
      fattuale e dovuto processo per Art. 7.2

8.4 — PROTEZIONE EDITORE
Il titolare NON è responsabile per danni derivanti da pubblicazione accurata,
in buona fede, di violazioni verificate, a condizione che:
  (a) Violazione sia stata accertata per processo Art. 7.1-7.3
  (b) Informazione pubblicata sia fattualmente accurata
  (c) Licenziatario sia stato notificato per Art. 7.2 (periodo cura 15 giorni)
  (d) Violazione rimane irrisolta dopo periodo cura
  (e) Record sia rimosso al soddisfare condizioni Art. 8.2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 9 — ESCLUSIONE DI GARANZIE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IL SOFTWARE VIENE FORNITO "COSÌ COM'È", SENZA GARANZIA DI ALCUN TIPO.
ESPLICITE O IMPLICITE, COMPRESE, MA NON SOLO, LE GARANZIE DI COMMERCIABILITÀ,
IDONEITÀ AD UN PARTICOLARE SCOPO E NON VIOLAZIONE DI DIRITTI ALTRUI. 
IN NESSUN CASO GLI AUTORI DEL SOFTWARE O I TITOLARI DEL COPYRIGHT POTRANNO ESSERE
RITENUTI RESPONSABILI DI RECLAMI, DANNI O ALTRE RESPONSABILITÀ, 
DERIVANTI DA O COLLEGATI A CONTRATTO, ILLECITO CIVILE O IN ALTRA RELAZIONE CON
IL SOFTWARE O CON IL SUO UTILIZZO O CON ALTRE OPERAZIONI DEL SOFTWARE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 10 — SEPARABILITÀ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Se qualsiasi disposizione di questa licenza è giudicata invalida o inapplicabile,
sarà sostituita dalla disposizione valida che più strettamente approssima l'effetto
originale. In caso di conflitto con condizioni d'uso di terzi: questa licenza prevale.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARTICOLO 11 — MODIFICHE ALLA LICENZA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Versione applicabile: quella in vigore all'inizio dell'utilizzo.
Nuova versione: preavviso 90 gg. Utilizzo continuato = accettazione.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— FINE DELLA LICENZA — aatel v2.1 — {{ANNO}} {{NOME}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOTA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

La presente licenza è redatta con la massima attenzione alla solidità
giuridica e si aggancia a normative UE vigenti. Non costituisce consulenza
legale professionale. Per utilizzo in contenzioso con grandi operatori
tecnologici è consigliabile la revisione da parte di un avvocato specializzato
in diritto d'autore e diritto dell'AI.

CAMBIAMENTI RISPETTO A v1.3:
- Integrazione di TUTTI i miglioramenti critici:
  * Articolo 0: Definizioni esplicite (invariato da v1.3)
  * Articolo 4.6: Reporting conformità continuativo (nuovo)
  * Articolo 7bis: Enforcement transfrontaliero e escalation normativa (nuovo)
  * Articolo 8: Registro pubblico violazioni (nuovo)

MIGLIORAMENTI MAGGIORI:
- Framework enforcement completo transfrontaliero (7bis)
- Meccanismo reputazione pubblica (8) - aumenta deterrenza
- Reporting continuativo obbligatorio (4.6) - abilita rilevamento precoce
- Regole presunzione (7bis.3) - sposta onere al convenuto
- Percorsi escalation normativa (7bis.2) - enforcement livello UE

RISULTATO: 9/10 — Enterprise-grade, completa, internazionalmente esecutiva

Adattamento della licenza aatel v2.1 (aatel.org).
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RIFERIMENTO PLACEHOLDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{ANNO}}         Anno copyright (es. 2026)
{{NOME}}         Nome completo o nome organizzazione del titolare
{{CITTÀ}}        Città del tribunale competente (es. Milano)
{{EMAIL}}        Email contatto per notifiche (es. aatel.license@gmail.com)
{{SOGLIA}}       Soglia fatturato per Livello A → B (es. 1000000)
{{IMPORTO}}      Canone mensile fisso entità commerciali (es. 10)
{{PERCENTUALE}}  Percentuale fatturato Livello B (es. 0.5)
{{VALUTA}}       Valuta (es. EUR)
{{PAGAMENTO}}    Metodo pagamento (es. Bitcoin / IBAN / PayPal)
{{PAYINSTR}}     Istruzioni pagamento (es. indirizzo wallet, IBAN, email PayPal)
{{REGISTRY_URL}} URL registro pubblico violazioni (es. violations.aatel.org)
`;

  var LICENSE_EN = `ANTI-AI TRAINING Ethical License (aatel) — Version 2.1

Copyright (c) {{ANNO}} {{NOME}}

Permission is hereby granted, free of charge, to any person or entity obtaining
a copy of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, subject to the following conditions:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 0 — DEFINITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

0.1 — "AI TRAINING"
Includes, but is not limited to:
  (a) Supervised learning, unsupervised learning, reinforcement learning
  (b) Fine-tuning, domain adaptation, transfer learning
  (c) Distillation, quantization, pruning (model compression)
  (d) Synthetic or augmented data generation derived from the Software
  (e) Alignment training (RLHF, DPO, preference optimization, similars)
  (f) Evaluation or benchmarking of AI/ML models using the Software
  (g) Feature extraction or embedding generation for ML pipelines

Does NOT include:
  (i) Inference (running a trained model to generate output)
  (ii) Caching or temporary storage for end-user queries
  (iii) Citation or reference to the Software in documentation

0.2 — "MILITARY USE"
Includes:
  (a) Direct use by armed forces, national guards, militias, or active reserves
  (b) Use by intelligence or security agencies (NSA, MI6, DGSE, similars)
  (c) Contractor (primary or subcontractor) providing services to any entity in (a)-(b)
  (d) Weapons development, targeting systems, cyber warfare platforms
  (e) Military surveillance, reconnaissance, battle management systems
  (f) Dual-use: systems that can be modified or adapted for military purposes
  (g) Indirect use: transferring the Software to third parties for military use

Does NOT include:
  (i) Civilian law enforcement (police, border patrol)
  (ii) Defensive cybersecurity (protecting non-military systems)
  (iii) Academic research on military technology (with publication intent)

0.3 — "COMMERCIAL ENTITY"
Any individual, organization, or legal person that:
  - Generates revenue from goods, services, or intellectual property
  - Has annual gross revenue ≥ {{SOGLIA}} {{VALUTA}}
  - Operates for profit or commercial purpose
  - Is NOT classified as non-profit under Section 5.6

0.4 — "NON-PROFIT ORGANIZATION"
Any legally registered entity that:
  - Has transparent funding mechanisms (public disclosure of donors/budget)
  - Prohibits distribution of profits or surplus to members
  - Has no commercial revenue from core activities
  - Is registered as charitable, NGO, association, or cooperative (non-profit model)
  - Includes: NGOs, charities, academic institutions, public research bodies,
    third-sector organizations, social cooperatives
  - EXCLUDES: VC-funded startups, tech companies, government contractors

0.5 — "VIOLATION"
Use of the Software in violation of Section 2, 3, or 4 of this license without
proper notification and payment as required by Section 4 and 5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — ATTRIBUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The copyright notice and this permission notice shall be included in all copies
or substantial portions of the Software.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — PROHIBITION ON AI/ML MODEL TRAINING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is EXPRESSLY AND ABSOLUTELY PROHIBITED, directly or indirectly, to:

  (a) Use the Software as training, fine-tuning, pre-training, or evaluation data
      for any AI, ML, deep learning, LLM, or statistical model of any kind
      (as defined in Section 0.1);

  (b) Use the output, structure, or any derived component to train, fine-tune,
      distill, align, benchmark, or evaluate any AI or ML model;

  (c) Incorporate the Software into automated pipelines for AI/ML data collection;

  (d) Generate synthetic or augmented datasets for AI/ML model training;

  (e) Transfer the Software to third parties for any of the above purposes.

This prohibition applies REGARDLESS OF PURPOSE — commercial, academic,
governmental, research, non-profit, or personal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — PROHIBITION ON MILITARY USE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Software may NOT be used for any military, paramilitary, or armed defense
purpose, as defined in Section 0.2. This includes:

  (a) Armed forces, national guards, militias, intelligence agencies;

  (b) Primary contractors and subcontractors providing services to (a);

  (c) Development of weapons, military drones, targeting, or surveillance systems;

  (d) Cyber warfare, electronic warfare, or offensive military operations;

  (e) Dual-use systems that can be adapted for military use;

  (f) Indirect use through third parties acting on behalf of military organizations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — MANDATORY NOTIFICATION FOR COMMERCIAL ENTITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4.1 — OBLIGATION TO NOTIFY
Notify by email BEFORE commencing use: {{EMAIL}}

4.2 — Notification must include:
  (a) Full legal name and business registration number
  (b) Tax ID / VAT number (if applicable)
  (c) Business address and jurisdiction
  (d) Description of intended use
  (e) Expected start date
  (f) Declared annual gross revenue (to determine fee tier per Section 5)
  (g) Name, title, and contact of designated compliance officer
  (h) Declaration: "I certify that this Software will NOT be used for AI training
      or military purposes as defined in Sections 2 and 3."

4.3 — Material changes must trigger updated notification within 30 days:
  (a) Change of legal status or ownership
  (b) Tier crossing (revenue above/below threshold)
  (c) Change in use description or scope
  (d) Change of compliance officer

4.4 — Tier Crossing
  If annual revenue crosses the {{SOGLIA}} {{VALUTA}} threshold:
  - Notify within 60 days of fiscal year-end when crossing occurred
  - Adjust payments from the 1st day of next fiscal year
  - Failure to notify = retroactive penalty (see Section 7.3)

4.5 — Cessation
  If use is terminated, send cessation email within 30 days to {{EMAIL}}

4.6 — ONGOING COMPLIANCE REPORTING

4.6.1 MONTHLY REPORTING REQUIREMENT
Tier A and B commercial entities must submit:
  (a) By the 5th calendar day of each month:
      - Certified statement of compliance
      - Any material changes to use or business
      - Certification of payment made
  (b) Failure to report = presumption of material change requiring reclassification
  (c) Format: Email to {{EMAIL}} with subject "[YEAR] MONTHLY COMPLIANCE REPORT"

4.6.2 ANNUAL AUDIT CERTIFICATION (TIER B ONLY)
Tier B entities must provide annually (within 90 days of fiscal year-end):
  (a) Self-certified revenue declaration (signed by authorized officer)
  (b) Copy of relevant tax filing or certified accountant letter
  (c) Declaration of no material business structure changes
  (d) Confirmation of use continuation/cessation

4.6.3 RECORD RETENTION
All commercial entities must retain:
  (a) Payment records: 24 months
  (b) Usage records (if applicable): 24 months
  (c) Compliance certifications: 24 months
  (d) Available for copyright holder upon request within 15 days

4.6.4 AUDIT RIGHTS
Copyright holder may audit:
  (a) Upon reasonable suspicion of non-compliance
  (b) No more than once per calendar year per entity
  (c) Via remote document review or on-site inspection
  (d) All costs borne by copyright holder UNLESS non-compliance > 10%
  (e) If non-compliance found: audit costs are additional penalty

WARNING: Use without notification = MATERIAL VIOLATION resulting in automatic
termination of all rights and triggering penalty provisions (Section 7).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — FEE STRUCTURE AND PAYMENT OBLIGATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5.1 — TIER A (Annual revenue < {{SOGLIA}} {{VALUTA}})
Fixed monthly fee: {{IMPORTO}} {{VALUTA}} / month
No additional revenue-based component.
Due from the 1st of each month, starting the month notification is received.

5.2 — TIER B (Annual revenue ≥ {{SOGLIA}} {{VALUTA}})
Fixed monthly fee: {{IMPORTO}} {{VALUTA}} / month, PLUS
Revenue percentage: {{PERCENTUALE}}% of annual gross revenue ÷ 12 per month.

Tier B entities must provide a self-certified annual revenue declaration
within 90 days of each fiscal year-end. The copyright holder may request
supporting documentation (tax filings, financial statements) to verify
declarations.

Example calculation:
  Threshold: {{SOGLIA}} {{VALUTA}}
  Fixed fee: {{IMPORTO}} {{VALUTA}}/month
  Percentage: {{PERCENTUALE}}%
  Annual revenue: {{SOGLIA}} × 2 {{VALUTA}}
  Monthly payment: {{IMPORTO}} + (({{SOGLIA}} × 2 × {{PERCENTUALE}}) ÷ 12) {{VALUTA}}

5.3 — FREELANCERS AND SOLE TRADERS
Treated as Tier A if annual net income < {{SOGLIA}} {{VALUTA}},
as Tier B if annual net income ≥ {{SOGLIA}} {{VALUTA}}.
Submit tax return or certified accountant letter as proof.

5.4 — PAYMENT TERMS AND METHOD
Due on or before the 1st calendar day of each month.
Accepted payment method: {{PAGAMENTO}}
Full payment instructions: {{PAYINSTR}}
Retain documentary proof of all payments for a minimum of 24 months.
Payment records must be provided on request (within 15 days).

5.5 — DEFAULT AND REMEDIES
Failure to pay for 2+ consecutive months = AUTOMATIC AND IMMEDIATE REVOCATION
of all rights. Reinstated only upon:
  (a) Full settlement of all arrears
  (b) Late payment penalty = 20% of unpaid amounts
  (c) Written confirmation of cure

5.6 — EXEMPTIONS
Private individuals (personal non-commercial use) and non-profit organizations
(as defined in Section 0.4) are exempt from payment obligations.
Exemption verification: non-profits must still provide notification (Section 4.1)
with proof of non-profit status (registration certificate).

5.7 — SAFEGUARD CLAUSE — ANNUAL INFLATION ADJUSTMENT
The copyright holder reserves the right, at their sole discretion, to adjust
once per calendar year: the fixed fee, the revenue threshold, and/or the
revenue percentage.

Mechanism: any upward adjustment may not exceed the annual HICP rate published
by Eurostat (EU), or the equivalent national CPI of the country where the
copyright holder is domiciled, for the most recently published 12-month
reference period. Downward adjustments are always permitted.

Notification: at least 60 calendar days before the adjusted amounts take
effect, with indication of previous parameters, new parameters, the inflation
index used, the calculation, and the effective date.

Effect of silence: no written objection within 30 days of receiving the
notification = deemed acceptance. If objecting, the entity must cease use
and submit a termination notice within the same 30-day period.

First-year protection: no adjustment may be applied within the first 12
months from the date on which a given entity begins using the Software.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6 — REDISTRIBUTION WITH UNMODIFIED LICENSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Any redistribution must include this license in its entirety, without
modification. No additional restrictions may be imposed on recipients.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7 — MONITORING, ENFORCEMENT AND REMEDIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7.1 — VIOLATION TRIGGERS
A violation occurs upon:
  (a) Use of the Software for AI training (Section 2) without prior written consent
  (b) Use of the Software for military purposes (Section 3) without prior consent
  (c) Use by commercial entity without notification and payment (Sections 4-5)
  (d) Failure to pay for 1+ month (after notice)
  (e) False declaration of non-profit status or revenue tier
  (f) Transfer to third parties in violation of Section 2(e)

7.2 — DISPUTE NOTIFICATION & CURE PERIOD
Upon discovery of violation, copyright holder sends formal notice to licensee
with 15-day cure period. Notice must specify:
  (a) Description of alleged violation
  (b) Relevant section(s) of license
  (c) Required corrective action
  (d) Deadline for cure (15 calendar days)

7.3 — VIOLATION SANCTIONS & REMEDIES
If violation is not cured within 15 days, the following apply:

AUTOMATIC REMEDIES:
  (a) Immediate termination of all rights under this license
  (b) Cessation order: cease use within 15 days
  (c) Deletion of all copies: delete/destroy Software within 30 days
  (d) Mandatory audit: provide copies of any backups, derivatives, or uses

FINANCIAL PENALTIES:
  (a) Non-payment cases: penalty = 3× unpaid amounts (minimum {{IMPORTO}} {{VALUTA}})
  (b) AI training violations: penalty = 3× annual fee for that entity
      (or estimated annual fee if entity size cannot be determined)
  (c) Military use violations: penalty = 5× estimated annual usage fee
  (d) False declaration: penalty = 2× the amounts that should have been paid

PUBLICATION REMEDY:
  (a) Copyright holder may publish the name, date, and nature of violation
      on a public registry or website, for 12 months, unless dispute is resolved.

RIGHTS ASSIGNMENT:
  (a) Licensee may not dispute or object to publication.
  (b) Copyright holder may assign penalty recovery rights to legal counsel or
      third-party collection agency.

7.4 — ENFORCEMENT JURISDICTION
Applicable law: Italian law + EU regulations
  - Italian Copyright Law (Law No. 633/1941)
  - EU Directive 2019/790 (Digital Single Market)
  - EU Regulation 2024/1689 (AI Act)
  - General Italian Civil Code provisions (Art. 1218 breach, Art. 1382 damages)

Exclusive jurisdiction: Court of {{CITTÀ}}, Italy (civile / tribunale)
  - All disputes, claims, and enforcement actions shall be brought exclusively
    before the civil court (tribunale) of {{CITTÀ}}, Italy.
  - Both parties submit to personal jurisdiction in {{CITTÀ}}, Italy.
  - Any proceedings in another jurisdiction shall be considered void.

Competence does NOT change due to:
  (a) Licensee's legal seat or incorporation in another country
  (b) Infrastructure location or cloud hosting jurisdiction
  (c) Personnel nationality or residence
  (d) Corporate reorganizations, mergers, or acquisitions post-acceptance
  (e) Any claim that accepting this license violates local law

WAIVER OF IMMUNITY:
  Any entity using the Software implicitly waives claims of sovereign immunity,
  diplomatic immunity, or jurisdictional challenge in the Court of {{CITTÀ}}, Italy.

7.5 — RIGHT TO LITIGATION AND CLASS ACTION
The copyright holder may:
  (a) Sue directly in the Court of {{CITTÀ}}, Italy
  (b) Join or initiate class action suits against multiple violators
  (c) Assign rights to legal counsel or collection agencies
  (d) Report violations to competent authorities

Licensee waives right to:
  (a) Forum shopping or challenging jurisdiction
  (b) Requesting arbitration instead of court proceedings
  (c) Demanding jury trial

7.6 — PRESUMPTION OF DAMAGES
If violation is proven, minimum damages are presumed as:
  (a) Non-payment: 3× unpaid amounts + costs
  (b) Unauthorized AI training: 3× estimated annual usage fee + 1-year access ban
  (c) Military use: 5× estimated annual usage fee + permanent access ban
  (d) False declaration: 2× misclassified fees + reputational damages

Licensee bears burden of proof to reduce damages below presumed amounts.

7.7 — RIGHT OF INSPECTION & AUDIT
Copyright holder or designated auditor may:
  (a) Request access to Software usage logs (if available)
  (b) Request proof of cessation or deletion
  (c) Conduct remote or on-site audit of compliance
  (d) Require sworn declaration of non-use
  (e) Engage independent third-party auditor (at licensee's expense, if
      non-compliance confirmed)

Licensee must respond within 30 days or forfeit right to dispute damages.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7bis — CROSS-BORDER ENFORCEMENT & REGULATORY ESCALATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7bis.1 — ENFORCEMENT FOR ENTITIES OUTSIDE ITALY

For licensees with legal seat outside Italy or EU:
  (a) Copyright holder may initiate enforcement in any jurisdiction where
      the licensee operates, maintains infrastructure, or has revenue
  (b) Copyright holder may report violations to:
      - Competent national courts in operating jurisdictions
      - National data protection authorities
      - International IP enforcement organizations
      - EU enforcement bodies (if operating in EU)

7bis.2 — REGULATORY ESCALATION (EU ENTITIES)

For entities operating in the EU:
  (a) Violations may be reported to:
      - National data protection authority (where headquartered)
      - EU Digital Services Coordinator (for platform violations)
      - EDPB (European Data Protection Board) if data processing involved
      - Industry regulator (if applicable)
  (b) Violations may trigger investigation under:
      - Digital Markets Act (if entity is gatekeeper)
      - AI Act (if commercial AI training)
      - Digital Services Act (if platform violation)

7bis.3 — PRESUMPTION OF LIABILITY (NON-DISCLOSURE)

If licensee fails to disclose tracking/usage data upon formal request:
  (a) Burden of proof shifts entirely to licensee
  (b) Copyright holder may presume:
      - 100% of relevant commercial activity involves Software
      - Violator intentionally concealed usage
      - Statutory damages are appropriate
  (c) Failure to respond within 30 days = automatic presumption

7bis.4 — ASSET ENFORCEMENT

For violators operating in EU:
  (a) Copyright holder may seek from Italian court:
      - EU-wide asset freezing orders
      - Compliance orders enforceable across EU (Brussels I bis)
      - Injunctions for service suspension
      - Removal orders from EU marketplaces
  (b) Non-compliance with Italian court orders may trigger:
      - Referral to EU law enforcement
      - Reporting to competent authorities
      - Public notice of non-compliance
      - Implementation of asset freezes per EU regulations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 8 — PUBLIC REGISTRY OF VIOLATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8.1 — VIOLATION REGISTRY PUBLICATION
The copyright holder maintains the right to publish verified violations to
a public registry at {{REGISTRY_URL}} (or equivalent platform), including:
  (a) Name of violating entity or individual
  (b) Date violation was discovered and notice issued (Art. 7.2)
  (c) Nature of violation (non-payment, unauthorized training, false declaration)
  (d) Amounts due (if financial violation)
  (e) Current status (disputed, settled, resolved, litigated, non-compliant)

8.2 — REMOVAL CONDITIONS
A violation record is removed from the registry upon:
  (a) Full payment of all amounts due (principal + penalties)
  (b) Cessation of violation + written proof of compliance
  (c) Mutual written settlement agreement
  (d) Court judgment or arbitral award in favor of the violator
  (e) 24-month statute of limitations expiration from discovery (Art. 7.2)

8.3 — EFFECT OF REGISTRY
Publication of a violation:
  (a) Serves as constructive notice to other copyright holders
  (b) May be considered by enforcement authorities (DMA, AI Act) in investigations
  (c) May affect violator's business reputation, credit standing, and third-party relationships
  (d) Does not constitute defamation if published in good faith with
      factual accuracy and due process per Art. 7.2

8.4 — PUBLISHER PROTECTION
The copyright holder is NOT liable for damages arising from accurate,
good-faith publication of verified violations, provided:
  (a) Violation was discovered per Art. 7.1-7.3 process
  (b) Information published is factually accurate
  (c) Violator was notified per Art. 7.2 (15-day cure period)
  (d) Violation remains unresolved after cure period
  (e) Record is removed upon satisfaction of Art. 8.2 conditions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 9 — DISCLAIMER OF WARRANTIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR 
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
OTHER DEALINGS IN THE SOFTWARE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 10 — SEVERABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If any provision of this license is held invalid or unenforceable, it shall
be replaced by the valid provision that most closely approximates the original
effect. In case of conflict with third-party terms of use: this license prevails.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 11 — LICENSE AMENDMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Applicable version: the one in force at the start of use.
New version: 90-day notice. Continued use = acceptance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— END OF LICENSE — aatel v2.1 — {{ANNO}} {{NOME}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This license has been drafted with the utmost attention to legal soundness
and is anchored to current EU regulations. It does not constitute professional
legal advice. For use in disputes with major technology operators, review by
a lawyer specializing in copyright and AI law is strongly recommended.

CHANGES FROM v1.3:
- Integrated ALL critical enhancements:
  * Section 0: Explicit definitions (unchanged from v1.3)
  * Section 4.6: Ongoing compliance reporting (new)
  * Section 7bis: Cross-border enforcement & regulatory escalation (new)
  * Section 8: Public violation registry (new)

MAJOR IMPROVEMENTS:
- Complete enforcement framework across borders (7bis)
- Public reputation mechanism (8) - increases deterrence
- Mandatory ongoing reporting (4.6) - enables early detection
- Presumption rules (7bis.3) - shifts burden to defendant
- Regulatory escalation paths (7bis.2) - EU-level enforcement

RESULT: 9/10 — Enterprise-grade, comprehensive, internationally enforceable

Adaptation of the aatel v2.1 license (aatel.org).
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PLACEHOLDER REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{ANNO}}         Year of copyright (e.g. 2026)
{{NOME}}         Full name or organization name of the rights holder
{{CITTÀ}}        City of the competent court (e.g. Milano)
{{EMAIL}}        Contact email for notifications (e.g. aatel.license@gmail.com)
{{SOGLIA}}       Revenue threshold for Tier A → Tier B (e.g. 1000000)
{{IMPORTO}}      Fixed monthly fee for commercial entities (e.g. 10)
{{PERCENTUALE}}  Revenue percentage for Tier B (e.g. 0.5)
{{VALUTA}}       Currency (e.g. EUR)
{{PAGAMENTO}}    Payment method (e.g. Bitcoin / IBAN / PayPal)
{{PAYINSTR}}     Payment instructions (e.g. wallet address, IBAN, PayPal email)
{{REGISTRY_URL}} Public registry URL for violations (e.g. violations.aatel.org)
`;

  /* ══════════════════════════════════════════════════════════════
     LICENSE TEMPLATES — aatel-IC v2.1
     ══════════════════════════════════════════════════════════════ */

  var IC_LICENSE_IT = `Anti-AI Training Ethical License — Internet Content Edition
aatel-IC — Versione 2.1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Copyright (c) {{ANNO}} {{NOME}}
Legge applicabile: Diritto italiano + Normativa UE
Foro competente esclusivo: Tribunale di {{CITTÀ}}, Italia
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AVVISO PRELIMINARE — ACCETTAZIONE OBBLIGATORIA

L'accesso, la lettura, l'indicizzazione, la riproduzione, la memorizzazione
in qualsiasi forma o l'utilizzo del Contenuto in qualsiasi sistema automatizzato
costituisce accettazione integrale e incondizionata della presente licenza,
indipendentemente da qualsiasi dichiarazione contraria del licenziatario.
Non è richiesta la firma. L'utilizzo equivale ad accettazione (art. 1327 c.c.;
art. 25 Reg. UE 2024/1689 — AI Act).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 1 — ATTRIBUZIONE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Qualsiasi utilizzo, riproduzione, citazione o redistribuzione del Contenuto
deve includere: nome dell'autore/titolare, fonte originale (URL canonico),
testo integrale della presente licenza o collegamento permanente ad essa.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 2 — DIVIETO ASSOLUTO DI UTILIZZO PER ADDESTRAMENTO AI/ML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

È espressamente e assolutamente vietato, senza possibilità di deroga:
· Usare il Contenuto come dati di addestramento, fine-tuning, pre-training,
  distillazione, allineamento o valutazione per qualsiasi sistema AI/ML;
· Incorporare il Contenuto in scraper, crawler o pipeline per raccolta dati AI;
· Generare dataset sintetici o aumentati dal Contenuto per AI/ML;
· Trasferire il Contenuto a terzi per i suddetti scopi.
Divieto valido indipendentemente dallo scopo e dalla tecnica di raccolta.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 3 — FEE PER UTILIZZO DA PARTE DI MOTORI DI RICERCA AI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3.1 — DEFINIZIONE DI MOTORE AI
Qualsiasi sistema che: (a) indicizza/memorizza/recupera il Contenuto in modo
automatizzato; (b) usa il Contenuto per generare risposte a utenti o sistemi;
(c) espone il Contenuto tramite AI Overview, Answer Engine o simili.

3.2 — PRINCIPIO: SI PAGA PER UTILIZZO, NON PER ACCESSO
L'obbligo sorge ogni volta che il Contenuto viene usato per produrre una risposta,
indipendentemente da: numero di download/indicizzazioni; conservazione in cache,
embedding, database vettoriale o altra archiviazione; citazione esplicita o uso
implicito; fruizione gratuita o a pagamento dell'utente finale.

REGOLA AUREA: 1 indicizzazione × 1.000.000 risposte = pagamento per 1.000.000
utilizzi, non per un solo accesso.

3.3 — STRUTTURA TARIFFARIA
Componente A — Canone fisso mensile: {{AI_FISSO}} {{VALUTA}} / mese
  (dovuto dal primo mese di utilizzo)
Componente B — Fee variabile: {{AI_PER1K}} {{VALUTA}} ogni 1.000 risposte
  in cui il Contenuto è utilizzato (calcolate mensilmente)

Esempio: canone fisso {{AI_FISSO}} {{VALUTA}}/mese + {{AI_PER1K}} {{VALUTA}}/1.000 risposte.
  500.000 risposte → {{AI_FISSO}} + (500 × {{AI_PER1K}}) {{VALUTA}}/mese

3.4 — DEFINIZIONE: "RISPOSTA IN CUI IL CONTENUTO È UTILIZZATO"
Una risposta è conteggiata come utilizzo del Contenuto se:
  (a) Il Contenuto è citato, parafrasato o sintetizzato nella risposta;
  (b) Il Contenuto è usato per generare o informare l'output del modello;
  (c) Il Contenuto contribuisce materialmente al ranking o selezione risultati;
  (d) Il Contenuto è usato come contesto per RAG (Retrieval-Augmented Generation);
  (e) Qualsiasi parte del Contenuto è visibile all'utente finale nella risposta.

NON include:
  (i) Risposte dove Contenuto è in indice ma non recuperato o usato
  (ii) Risposte generate puramente da altre fonti
  (iii) Inferenza sul modello dove Contenuto non era in training

3.5 — ANTI-SCAPPATOIA: ASSENZA DI DATI DI TRACCIAMENTO
a) Obbligo di implementare tracciamento entro 90 giorni dalla notifica.
b) In assenza: stima presuntiva automatica = (query totali) × (quota min 0,1%).
c) Senza dati né stima entro il 5° del mese: presunzione del 100% delle query.
   L'onere della prova contraria è interamente a carico del Motore AI.

3.6 — ANTI-SCAPPATOIA: ROBOTS.TXT
La mancata configurazione di robots.txt NON costituisce autorizzazione implicita
né rinuncia ai diritti. I diritti derivano dalla legge e dalla presente licenza.
Riserva espressa ex art. 4 Dir. UE 2019/790 (recepita con D.Lgs. 177/2021).

3.7 — ANTI-SCAPPATOIA: ENTITÀ LEGALI DIVERSE
Responsabilità solidale tra tutte le entità del gruppo (società madre, controllate,
fornitori infrastruttura, sublicenziatari). Frazionamento artificiale vietato;
se accertato: fee calcolata sull'utilizzo aggregato + pagamento solidale.

3.8 — ANTI-SCAPPATOIA: CAMBIO DI GIURISDIZIONE
Legge applicabile: diritto italiano + normativa UE (L.d.A. 633/1941;
Dir. UE 2019/790; AI Act Reg. UE 2024/1689; DSA Reg. UE 2022/2065).
Foro esclusivo: Tribunale di {{CITTÀ}}, Italia.
La competenza non cambia al variare di: sede legale, paese infrastruttura,
nazionalità personale, riorganizzazioni societarie post-accettazione.
Base: art. 7(2) Reg. UE 1215/2012 (Bruxelles I bis) + art. 79 L.d.A. italiana.
I Motori AI che operano in UE sono soggetti all'AI Act indipendentemente
dalla loro sede legale (principio di effettività; art. 3 AI Act).

3.9 — OBBLIGHI DI RENDICONTAZIONE
· Prima dell'avvio: notifica a {{EMAIL}} con denominazione, ragione sociale,
  P.IVA, descrizione tecnica, responsabile conformità, metodo tracciamento.
· Entro il 5° di ogni mese: report certificato con n. risposte, metodo misurazione,
  calcolo importo, prova pagamento.
· Su richiesta: log grezzi entro 30 gg, conservati 36 mesi.
· Audit indipendente a spese del Motore AI se sottostima > 10%.

3.10 — PROVA DI VIOLAZIONE PER CASI TRANSFRONTALIERI
Per Motori AI con sede legale al di fuori dell'Italia o dell'UE:
  (a) Il titolare può richiedere divulgazione dati di tracciamento tramite notifica formale
  (b) Mancata divulgazione entro 30 giorni → presunzione di utilizzo 100% query
  (c) Non-divulgazione può essere segnalata a:
      - Coordinatore Servizi Digitali UE
      - EDPB (European Data Protection Board)
      - Autorità nazionale protezione dati
      - Organismi internazionali enforcement IP
  (d) Motori AI che operano in UE sono soggetti a Dir. UE 2019/790 Articolo 17,
      che richiede licenza per uso di contenuto protetto in sistemi AI
  (e) Non-conformità può avviare indagine normativa secondo AI Act UE

3.11 — MANCATO PAGAMENTO E REVOCA
1+ mese di mancato pagamento O mancata rendicontazione → diffida (15 gg).
Senza regolarizzazione: revoca automatica + rimozione entro 15 gg +
penale contrattuale = 3× gli importi dovuti (art. 1382 c.c.).

3.12 — ENFORCEMENT TRANSFRONTALIERO
Per Motori AI con sede legale al di fuori dell'Italia:
  (a) Il titolare può intentare azioni enforcement in qualsiasi giurisdizione
      dove Motore AI opera o mantiene server/infrastruttura
  (b) Violazioni possono essere segnalate a autorità normative in giurisdizioni operative
  (c) Il titolare può cercare enforcement tramite:
      - Organismi normativi UE (DMA, organismi implementazione AI Act)
      - Autorità nazionali protezione dati
      - Meccanismi enforcement IP internazionali
      - Tribunali locali in giurisdizioni dove Motore AI opera
  (d) Mancato rispetto ordini tribunale italiano può attivare:
      - Congelamento beni UE-wide
      - Rimozione da risultati ricerca UE
      - Segnalazione a autorità enforcement UE
      - Sanzioni secondo DSA UE (fino a 6% ricavi)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 4 — DIVIETO DI UTILIZZO MILITARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vietato qualsiasi uso militare, paramilitare o di difesa armata: forze armate,
intelligence, sviluppo armamenti, cyber warfare, sorveglianza militare.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 5 — OBBLIGHI ENTITÀ COMMERCIALI NON-AI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5.1 NOTIFICA OBBLIGATORIA PER TUTTI — a {{EMAIL}} prima di qualsiasi utilizzo,
    indipendentemente dal fatturato. Includere: ragione sociale, P.IVA,
    descrizione utilizzo, fatturato dichiarato, responsabile conformità.

5.2 STRUTTURA A TRE LIVELLI:

  LIVELLO 0 — GRATUITO (nessun pagamento):
  · Fatturato annuo < €1.000.000
  · Persone fisiche, non-profit, ONG, associazioni, enti del terzo settore,
    cooperative sociali, qualsiasi soggetto senza finalità di lucro.
  → Solo obbligo di notifica (Art. 5.1). Nessun pagamento dovuto.

  LIVELLO A — CANONE FISSO:
  · Fatturato annuo ≥ €1.000.000 e < {{SOGLIA}} {{VALUTA}}
  → Canone fisso mensile: {{IMPORTO}} {{VALUTA}} / mese

  LIVELLO B — CANONE FISSO + PERCENTUALE:
  · Fatturato annuo ≥ {{SOGLIA}} {{VALUTA}}
  → Canone fisso: {{IMPORTO}} {{VALUTA}} / mese
     PIÙ {{PERCENTUALE}}% del fatturato annuo ÷ 12 al mese
  → Dichiarazione autocertificata fatturato entro 90 gg chiusura esercizio.

5.3 La soglia di €1.000.000 è fissa e non soggetta ad adeguamento inflattivo.
    Superamento soglia: notifica entro 60 gg dalla chiusura esercizio.

5.4 Pagamento: entro il 1° di ogni mese. Metodo: {{PAGAMENTO}} — {{PAYINSTR}}
5.5 Mancato pagamento 2+ mesi: revoca + arretrati + 20% penale.
5.6 Inflazione: adeguamento fee Livelli A/B una volta/anno (≤ HICP/CPI),
    preavviso 60 gg. La soglia €1M non è soggetta ad adeguamento.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 6 — REDISTRIBUZIONE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Qualsiasi redistribuzione deve includere questa licenza integrale, mantenere
l'attribuzione e non rimuovere gli avvisi di copyright.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 7 — RIMEDI E SANZIONI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7.1 Le violazioni costituiscono: violazione del diritto d'autore (art. 158 L.d.A.;
    art. 13 Dir. 2019/790) + inadempimento contrattuale (art. 1218 c.c.) +
    violazione AI Act ove applicabile.
7.2 Rimedi: cessazione immediata, rimozione Contenuto, risarcimento danni,
    penale contrattuale (3×), pubblicazione sentenza (art. 166 L.d.A.).
7.3 Danno minimo presunto = fee calcolata secondo Art. 3.3 con presunzione 100%.
7.4 Il titolare può aderire ad azioni collettive e cedere i diritti di credito.
7.5 Per enforcement transfrontaliero: vedi Art. 3.12 (meccanismi enforcement).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 8 — REGISTRO PUBBLICO DI VIOLAZIONI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8.1 — PUBBLICAZIONE REGISTRO
Il titolare si riserva il diritto di pubblicare violazioni verificate su un
registro pubblico presso {{REGISTRY_URL}} o piattaforma equivalente, incluso:
  (a) Nome Motore AI o entità violatrice
  (b) Data scoperta violazione
  (c) Natura della violazione (mancato pagamento, addestramento non autorizzato,
      indicizzazione non autorizzata)
  (d) Importi dovuti (se violazione finanziaria)
  (e) Status corrente (contestato, regolato, irrisolto, in contenzioso)

8.2 — CONDIZIONI DI RIMOZIONE
Un record di violazione è rimosso dal registro al verificarsi di:
  (a) Pagamento integrale di tutti gli importi dovuti
  (b) Cessazione della violazione + prova di conformità
  (c) Accordo transattivo scritto reciproco
  (d) Sentenza giudiziale a favore del violatore
  (e) Scadenza termini di prescrizione (24 mesi dalla scoperta)

8.3 — EFFETTO DEL REGISTRO
Pubblicazione di una violazione:
  (a) Serve come notifica costruttiva della violazione ad altri titolari
  (b) Può essere considerato da regolatori (DMA, autorità implementazione AI Act)
      in indagini o azioni enforcement
  (c) Può influire su standing normativo o licensing del Motore AI
  (d) Non costituisce diffamazione se pubblicato in buona fede con accuratezza
      fattuale e dovuto processo

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 9 — ESCLUSIONE DI GARANZIE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IL CONTENUTO VIENE FORNITO "COSÌ COM'È" SENZA GARANZIA DI ALCUN TIPO.
ESPLICITE O IMPLICITE, COMPRESE, MA NON SOLO, LE GARANZIE DI COMMERCIABILITÀ,
IDONEITÀ AD UN PARTICOLARE SCOPO E NON VIOLAZIONE DI DIRITTI ALTRUI. 
IN NESSUN CASO GLI AUTORI DEL SOFTWARE O I TITOLARI DEL COPYRIGHT POTRANNO ESSERE
RITENUTI RESPONSABILI DI RECLAMI, DANNI O ALTRE RESPONSABILITÀ, 
DERIVANTI DA O COLLEGATI A CONTRATTO, ILLECITO CIVILE O IN ALTRA RELAZIONE CON
IL SOFTWARE O CON IL SUO UTILIZZO O CON ALTRE OPERAZIONI DEL SOFTWARE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 10 — SEPARABILITÀ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Clausola invalida → sostituita da clausola valida più vicina all'effetto originale.
In caso di conflitto con condizioni d'uso di terzi: questa licenza prevale.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 11 — MODIFICHE ALLA LICENZA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Versione applicabile: quella in vigore all'inizio dell'utilizzo.
Nuova versione: preavviso 90 gg. Utilizzo continuato = accettazione.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— FINE LICENZA — aatel-IC v2.1 — {{ANNO}} {{NOME}} — aatel.org
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOTA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

La presente licenza è redatta con la massima attenzione alla solidità
giuridica e si aggancia a normative UE vigenti. Non costituisce consulenza
legale professionale. Per utilizzo in contenzioso con grandi operatori
tecnologici è consigliabile la revisione da parte di un avvocato specializzato
in diritto d'autore e diritto dell'AI.

CAMBIAMENTI RISPETTO A v2.0:
- Aggiunto Art. 3.4: Definizione esplicita di "risposta in cui Contenuto è usato"
  per calcolo fee chiaro
- Aggiunto Art. 3.10: Meccanismi prova per violazioni transfrontaliere (divulgazione,
  regole presunzione, segnalazione normativa)
- Aggiunto Art. 3.12: Enforcement transfrontaliero tramite organismi normativi UE,
  DMA, autorità AI Act, azioni multi-giurisdizionali
- Aggiunto Art. 8: Registro pubblico di violazioni con condizioni pubblicazione e rimozione
- Potenziato Art. 7.5: Riferimento enforcement transfrontaliero
- Chiarito fondamento normativo: DSA UE, DMA, AI Act art. 3 (principio effettività)
  per entità non-UE

Adattamento della licenza aatel-IC v2.1 (aatel.org).
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RIFERIMENTO PLACEHOLDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{ANNO}}            Anno copyright (es. 2026)
{{NOME}}            Nome completo o nome organizzazione del titolare
{{CITTÀ}}           Città del tribunale competente (es. Milano)
{{EMAIL}}           Email contatto per notifiche (es. aatel.license@gmail.com)
{{AI_FISSO}}        Canone mensile fisso per Motori AI (es. 10)
{{AI_PER1K}}        Fee variabile per 1.000 risposte (es. 5)
{{SOGLIA}}          Soglia fatturato per Livello A → B (es. 10000000)
{{IMPORTO}}         Canone mensile fisso entità commerciali (es. 10)
{{PERCENTUALE}}     Percentuale fatturato Livello B (es. 0.5)
{{VALUTA}}          Valuta (es. EUR)
{{PAGAMENTO}}       Metodo pagamento (es. Bitcoin / IBAN / PayPal)
{{PAYINSTR}}        Istruzioni pagamento (es. indirizzo wallet, IBAN, email PayPal)
{{REGISTRY_URL}}    URL registro pubblico violazioni (es. violations.aatel.org)
`;

  var IC_LICENSE_EN = `Anti-AI Training Ethical License — Internet Content Edition
aatel-IC — Version 2.1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Copyright (c) {{ANNO}} {{NOME}}
Governing law: Italian law + EU regulations
Exclusive jurisdiction: Court of {{CITTÀ}}, Italy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRELIMINARY NOTICE — MANDATORY ACCEPTANCE

This is a translation for informational purposes; the Italian version shall prevail
in case of any conflict or discrepancy.

Accessing, reading, indexing, reproducing, storing in any form, or using the
Content in any automated system constitutes full and unconditional acceptance
of this license, regardless of any contrary statement by the licensee.
No signature is required. Use is equivalent to acceptance (Art. 1327 Italian
Civil Code; Art. 25 EU Reg. 2024/1689 — AI Act).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 1 — ATTRIBUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Any use, reproduction, citation, or redistribution of the Content must include:
author/rights holder name, original source (canonical URL), full text of this
license or a permanent link to it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 2 — ABSOLUTE PROHIBITION OF AI/ML TRAINING USE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is expressly and absolutely prohibited, without exception:
· Using the Content as training, fine-tuning, pre-training, distillation,
  alignment, or evaluation data for any AI/ML system;
· Incorporating the Content into scrapers, crawlers, or pipelines for AI
  data collection;
· Generating synthetic or augmented datasets from the Content for AI/ML;
· Transferring the Content to third parties for the above purposes.
The prohibition applies regardless of purpose or collection technique.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 3 — FEES FOR USE BY AI SEARCH ENGINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3.1 — DEFINITION OF AI ENGINE
Any system that: (a) indexes/stores/recalls the Content automatically;
(b) uses the Content to generate responses to users or systems;
(c) exposes the Content via AI Overview, Answer Engine, or similar.


3.2 — PRINCIPLE: PAY FOR USE, NOT FOR ACCESS
The obligation arises whenever the Content is used to produce a response,
regardless of: number of downloads/indexings; storage in cache, embedding,
vector database, or other storage; explicit citation or implicit use; free
or paid end-user consumption.

GOLDEN RULE: 1 indexing × 1,000,000 responses = payment for 1,000,000 uses,
not for a single access.

3.3 — FEE STRUCTURE
Component A — Fixed monthly fee: {{AI_FISSO}} {{VALUTA}} / month
  (due from the first month of use)
Component B — Variable fee: {{AI_PER1K}} {{VALUTA}} per 1,000 responses
  in which the Content is used (calculated monthly)

Example: fixed fee {{AI_FISSO}} {{VALUTA}}/month + {{AI_PER1K}} {{VALUTA}}/1,000 responses.
  500,000 responses → {{AI_FISSO}} + (500 × {{AI_PER1K}}) {{VALUTA}}/month

3.4 — DEFINITION: "RESPONSE IN WHICH CONTENT IS USED"
A response is counted as using the Content if:
  (a) The Content is quoted, paraphrased, or summarized in the response;
  (b) The Content is used to generate or inform the model's output;
  (c) The Content contributes materially to the ranking or selection of results;
  (d) The Content is used as context for RAG (Retrieval-Augmented Generation);
  (e) Any part of the Content is visible to the end-user in the response.

Does NOT include:
  (i) Responses where Content is in index but not retrieved or used
  (ii) Responses generated purely from other sources
  (iii) Inference on the model where Content was not in training

3.5 — ANTI-LOOPHOLE: ABSENCE OF TRACKING DATA
a) Obligation to implement tracking within 90 days of notice.
b) If absent: automatic estimated calculation = (total queries) × (minimum
   quota 0.1%).
c) Without data or estimate by the 5th of the month: presumption of 100%
   of queries. Burden of proof rests entirely with the AI Engine.

3.6 — ANTI-LOOPHOLE: ROBOTS.TXT
Failure to configure robots.txt does NOT constitute implicit authorization
or waiver of rights. Rights derive from law and this license.
Express reservation per Art. 4 EU Directive 2019/790 (implemented via
Italian Legislative Decree 177/2021).

3.7 — ANTI-LOOPHOLE: DIFFERENT LEGAL ENTITIES
Joint liability among all group entities (parent company, subsidiaries,
infrastructure providers, sublicensees). Artificial splitting prohibited;
if detected: fee calculated on aggregated use + joint payment.

3.8 — ANTI-LOOPHOLE: CHANGE OF JURISDICTION
Applicable law: Italian law + EU regulations (Law No. 633/1941;
EU Directive 2019/790; AI Act EU Reg. 2024/1689; DSA EU Reg. 2022/2065).
Exclusive jurisdiction: Court of {{CITTÀ}}, Italy.
Competence does not change due to: legal seat, infrastructure country,
personnel nationality, corporate reorganizations post-acceptance.
Basis: Art. 7(2) EU Reg. 1215/2012 (Brussels I bis) + Art. 79 Italian
Law 633/1941.
AI Engines operating in the EU are subject to the AI Act regardless of
their legal seat (principle of effectiveness; Art. 3 AI Act).

3.9 — REPORTING OBLIGATIONS
· Before launch: notify {{EMAIL}} with name, company name, VAT, technical
  description, compliance officer, tracking method.
· By the 5th of each month: certified report with number of responses,
  measurement method, fee calculation, proof of payment.
· On request: raw logs within 30 days, kept 36 months.
· Independent audit at AI Engine's expense if underestimation > 10%.

3.10 — PROOF OF VIOLATION FOR CROSS-BORDER CASES
For AI Engines with legal seat outside Italy or EU:
  (a) Copyright holder may request disclosure of tracking data via formal notice
  (b) Failure to disclose within 30 days → presumption of 100% query usage
  (c) Non-disclosure may be reported to: EU Digital Services Coordinator,
      EDPB (European Data Protection Board), national data protection authority,
      or international IP enforcement bodies
  (d) AI Engines operating in EU are subject to EU Directive 2019/790 Article 17,
      which requires licensing for use of protected content in AI systems
  (e) Non-compliance may trigger regulatory investigation under EU AI Act

3.11 — NON-PAYMENT AND REVOCATION
1+ month of non-payment OR failure to report → formal notice (15 days).
Without regularization: automatic revocation + removal within 15 days +
contractual penalty = 3× the amounts due (Art. 1382 Italian Civil Code).

3.12 — CROSS-BORDER ENFORCEMENT
For AI Engines with legal seat outside Italy:
  (a) The copyright holder may join or initiate enforcement actions in any
      jurisdiction where the AI Engine operates or maintains servers/infrastructure
  (b) Violations may be reported to regulatory authorities in operating jurisdictions
  (c) The copyright holder may seek enforcement through:
      - EU regulatory bodies (DMA, AI Act implementation bodies)
      - National data protection authorities
      - International IP enforcement mechanisms
      - Local courts in jurisdictions where AI Engine operates
  (d) Failure to comply with Italian court orders may trigger:
      - EU-wide asset freezing
      - Removal from EU search results
      - Referral to EU law enforcement authorities
      - Fines under EU Digital Services Act (up to 6% revenue)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 4 — PROHIBITION OF MILITARY USE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Any military, paramilitary, or armed defense use is prohibited: armed forces,
intelligence, weapons development, cyber warfare, military surveillance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 5 — OBLIGATIONS OF NON-AI COMMERCIAL ENTITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5.1 MANDATORY NOTIFICATION FOR ALL — to {{EMAIL}} before any use,
    regardless of turnover. Include: company name, VAT, usage description,
    declared turnover, compliance officer.

5.2 THREE-TIER STRUCTURE:

  TIER 0 — FREE (no payment):
  · Annual turnover < €1,000,000
  · Individuals, non-profits, NGOs, associations, third-sector entities,
    social cooperatives, any non-profit entity.
  → Only notification obligation (Art. 5.1). No payment due.

  TIER A — FIXED FEE:
  · Annual turnover ≥ €1,000,000 and < {{SOGLIA}} {{VALUTA}}
  → Fixed monthly fee: {{IMPORTO}} {{VALUTA}} / month

  TIER B — FIXED FEE + PERCENTAGE:
  · Annual turnover ≥ {{SOGLIA}} {{VALUTA}}
  → Fixed fee: {{IMPORTO}} {{VALUTA}} / month
     PLUS {{PERCENTUALE}}% of annual turnover ÷ 12 per month
  → Self-certified turnover declaration within 90 days of fiscal year-end.

5.3 The €1,000,000 threshold is fixed and not subject to inflation adjustment.
    Exceeding threshold: notify within 60 days of fiscal year-end.

5.4 Payment: by the 1st of each month. Method: {{PAGAMENTO}} — {{PAYINSTR}}
5.5 Non-payment 2+ months: revocation + arrears + 20% penalty.
5.6 Inflation: adjust Tier A/B fees once/year (≤ HICP/CPI), 60-day notice.
    The €1M threshold is not subject to adjustment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 6 — REDISTRIBUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Any redistribution must include this full license, retain attribution,
and not remove copyright notices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 7 — REMEDIES AND SANCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7.1 Violations constitute: copyright infringement (Art. 158 Italian Law
    633/1941; Art. 13 Dir. 2019/790) + contractual breach (Art. 1218
    Italian Civil Code) + AI Act violation where applicable.
7.2 Remedies: immediate cessation, Content removal, damages, contractual
    penalty (3×), publication of judgment (Art. 166 Italian Law 633/1941).
7.3 Presumed minimum damage = fee calculated per Art. 3.3 with 100%
    presumption.
7.4 Rights holder may join class actions and assign credit rights.
7.5 For cross-border enforcement: see Art. 3.12 (enforcement mechanisms).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 8 — PUBLIC REGISTRY OF VIOLATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8.1 — REGISTRY PUBLICATION
The copyright holder maintains the right to publish verified violations to
a public registry at {{REGISTRY_URL}} or equivalent platform, including:
  (a) Name of AI Engine or violating entity
  (b) Date violation was discovered
  (c) Nature of violation (non-payment, unauthorized training, unauthorized indexing)
  (d) Amounts due (if financial violation)
  (e) Current status (disputed, settled, unresolved, litigated)

8.2 — REMOVAL CONDITIONS
A violation record is removed from the registry upon:
  (a) Full payment of all amounts due
  (b) Cessation of violation + proof of compliance
  (c) Mutual written settlement agreement
  (d) Court judgment in favor of the violator
  (e) Statute of limitations expiration (24 months from discovery)

8.3 — EFFECT OF REGISTRY
Publication of a violation:
  (a) Serves as constructive notice of violation to other rights holders
  (b) May be considered by regulators (EU DMA, AI Act authorities) in
      investigations or enforcement actions
  (c) May affect AI Engine's regulatory standing or licensing
  (d) Does not constitute defamation if published in good faith with
      factual accuracy and due process

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 9 — DISCLAIMER OF WARRANTIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THE CONTENT IS PROVIDED "AS IS" WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR 
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
OTHER DEALINGS IN THE SOFTWARE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 10 — SEVERABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Invalid clause → replaced by the valid clause closest to the original effect.
In case of conflict with third-party terms of use: this license prevails.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ART. 11 — LICENSE AMENDMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Applicable version: the one in force at the start of use.
New version: 90-day notice. Continued use = acceptance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— END OF LICENSE — aatel-IC v2.1 — {{ANNO}} {{NOME}} — aatel.org
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This license has been drafted with the utmost attention to legal soundness
and is anchored to current EU regulations. It does not constitute professional
legal advice. For use in disputes with major technology operators, review by
a lawyer specializing in copyright and AI law is strongly recommended.
In case of any conflict between this English translation and the Italian
original, the Italian version shall prevail.

CHANGES FROM v2.0:
- Added Art. 3.4: Explicit definition of "response in which Content is used"
  for clear fee calculation
- Added Art. 3.10: Proof mechanisms for cross-border violations (disclosure,
  presumption rules, regulatory reporting)
- Added Art. 3.12: Cross-border enforcement via EU regulatory bodies, DMA,
  AI Act authorities, and multi-jurisdictional actions
- Added Art. 8: Public registry of violations with publication and removal conditions
- Enhanced Art. 7.5: Cross-border enforcement reference
- Clarified regulatory basis: EU Digital Services Act, DMA, AI Act Art. 3
  (effectiveness principle) for non-EU entities

Adaptation of the aatel-IC v2.1 license (aatel.org).
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PLACEHOLDER REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{ANNO}}            Year of copyright (e.g. 2026)
{{NOME}}            Full name or organization name of the rights holder
{{CITTÀ}}           City of the competent court (e.g. Milano)
{{EMAIL}}           Contact email for notifications (e.g. aatel.license@gmail.com)
{{AI_FISSO}}        Fixed monthly fee for AI Engines (e.g. 10)
{{AI_PER1K}}        Variable fee per 1,000 responses (e.g. 5)
{{SOGLIA}}          Revenue threshold for Tier A → Tier B (e.g. 10000000)
{{IMPORTO}}         Fixed monthly fee for commercial entities (e.g. 10)
{{PERCENTUALE}}     Revenue percentage for Tier B (e.g. 0.5)
{{VALUTA}}          Currency (e.g. EUR)
{{PAGAMENTO}}       Payment method (e.g. Bitcoin / IBAN / PayPal)
{{PAYINSTR}}        Payment instructions (e.g. wallet address, IBAN, PayPal email)
{{REGISTRY_URL}}    Public registry URL for violations (e.g. violations.aatel.org)
`;

  /* ── aatel v2.1 GENERATOR ── */

  function getFields() {
    var cur = (document.getElementById('f-threshold-cur').value || '').trim() || null;
    return {
      anno:        (document.getElementById('f-year').value         || '').trim() || null,
      nome:        (document.getElementById('f-name').value         || '').trim() || null,
      email:       (document.getElementById('f-email').value        || '').trim() || null,
      citta:       (document.getElementById('f-city') ? (document.getElementById('f-city').value || '').trim() : null) || null,
      soglia:      (document.getElementById('f-threshold').value    || '').trim() || null,
      valuta:      cur,
      importo:     (document.getElementById('f-fixed').value        || '').trim() || null,
      percento:    (document.getElementById('f-percent').value      || '').trim() || null,
      pagamento:   (document.getElementById('f-payment').value      || '').trim() || null,
      payinstr:    (document.getElementById('f-payinstr').value     || '').trim() || null,
      registryUrl: (document.getElementById('f-registry') ? (document.getElementById('f-registry').value || '').trim() : null) || null,
    };
  }

  function fill(tmpl, f) {
    var cur = f.valuta || '[VALUTA]';
    return tmpl
      .replace(/\{\{ANNO\}\}/g,        f.anno      || '[ANNO]')
      .replace(/\{\{NOME\}\}/g,        f.nome      || '[NOME/ORGANIZZAZIONE]')
      .replace(/\{\{EMAIL\}\}/g,       f.email     || '[EMAIL]')
      .replace(/\{\{CITTÀ\}\}/g,       f.citta     || '[CITTÀ]')
      .replace(/\{\{SOGLIA\}\}/g,      f.soglia    || '[SOGLIA]')
      .replace(/\{\{VALUTA\}\}/g,      cur)
      .replace(/\{\{IMPORTO\}\}/g,     f.importo   || '[IMPORTO]')
      .replace(/\{\{PERCENTUALE\}\}/g, f.percento  || '[PERCENTUALE]')
      .replace(/\{\{PAGAMENTO\}\}/g,   f.pagamento || '[METODO]')
      .replace(/\{\{PAYINSTR\}\}/g,    f.payinstr  || '[ISTRUZIONI]')
      .replace(/\{\{REGISTRY_URL\}\}/g, f.registryUrl || '[REGISTRY_URL]');
  }

  function updatePreview() {
    var f = getFields();
    var lines = fill(LICENSE_IT, f).split('\n').slice(0, 12);
    var html = lines.map(function(line) {
      return line.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
        .replace(/\[([A-Z\/\s\u00C0-\u00FC\.\-]+)\]/g,'<span class="ph">[$1]</span>');
    }).join('\n');
    document.getElementById('preview-live').innerHTML = html + '\n<span class="ph">… [documento completo]</span>';
  }

  function showStatus(msg, type) {
    var el = document.getElementById('gen-status');
    el.textContent = msg;
    el.className = 'gen-status show ' + type;
    setTimeout(function() { el.className = 'gen-status'; }, 4000);
  }

  function downloadFile(content, filename) {
    try {
      var blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = filename; a.click();
      URL.revokeObjectURL(url);
      return true;
    } catch(e) { return false; }
  }

  function validate() {
    var f = getFields();
    var missing = [];
    if (!f.anno)     missing.push('Anno');
    if (!f.nome)     missing.push('Nome');
    if (!f.email)    missing.push('Email');
    if (!f.citta)    missing.push('Città foro');
    if (!f.soglia)   missing.push('Soglia fatturato');
    if (!f.valuta)   missing.push('Valuta');
    if (!f.importo)  missing.push('Importo fisso');
    if (!f.percento) missing.push('Percentuale');
    if (!f.pagamento)missing.push('Metodo pagamento');
    if (!f.payinstr) missing.push('Istruzioni pagamento');
    if (missing.length > 0) {
      showStatus('⚠ Campi mancanti: ' + missing.join(', '), 'error');
      document.getElementById('gen-form').scrollIntoView({ behavior:'smooth', block:'center' });
      return null;
    }
    return f;
  }

  function downloadLicense(type) {
    var f = validate();
    if (!f) return;
    var safe = (f.nome || 'aatel').replace(/[^a-zA-Z0-9_\- ]/g,'_').replace(/\s+/g,'_');
    var yr = f.anno || new Date().getFullYear();
    var ok = false;
    if (type === 'it') {
      ok = downloadFile(fill(LICENSE_IT, f), 'aatel_v2.1_IT_'+safe+'_'+yr+'.txt');
    } else if (type === 'en') {
      ok = downloadFile(fill(LICENSE_EN, f), 'aatel_v2.1_EN_'+safe+'_'+yr+'.txt');
    } else if (type === 'both') {
      ok = downloadFile(fill(LICENSE_IT, f), 'aatel_v2.1_IT_'+safe+'_'+yr+'.txt');
      setTimeout(function() { downloadFile(fill(LICENSE_EN, f), 'aatel_v2.1_EN_'+safe+'_'+yr+'.txt'); }, 400);
    } else if (type === 'md') {
      var cur = f.valuta || 'EUR';
      var md = '# ANTI-AI TRAINING Ethical License (aatel) v2.1\n\n';
      md += '> Copyright (c) ' + yr + ' ' + f.nome + '  \n';
      md += '## ✔ Permitted\n- Use, copy, modify, distribute, sublicense, sell the Software\n- Commercial use (with notification + fee)\n- Personal and non-profit use (free)\n\n';
      md += '## ✘ Prohibited\n- ❌ AI/ML training data use (any purpose)\n- ❌ Military or defense use\n- ❌ Commercial use without notification and fee\n\n';
      md += '## 💰 Fee Structure\n';
      md += '- **Notify before use**: [' + f.email + '](mailto:' + f.email + ')\n';
      md += '- **Tier A** (revenue < ' + f.soglia + ' ' + cur + '): ' + f.importo + ' ' + cur + '/month\n';
      md += '- **Tier B** (revenue ≥ ' + f.soglia + ' ' + cur + '): ' + f.importo + ' ' + cur + '/month + ' + f.percento + '% revenue/12\n';
      md += '- **Payment**: ' + f.pagamento + ' — ' + f.payinstr + '\n\n';
      md += '---\n**DISCLAIMER OF WARRANTIES**' + '\n' 
         'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  +'*\n'+
'IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, +'*\n'+
'FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL +'*\n'+
'THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR +'*\n'+
'OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, +'*\n'+
'ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR +'*\n'+
'OTHER DEALINGS IN THE SOFTWARE.'+'*\n';
      md += '---\n*aatel v2.1 — Not legal advice. [aatel.org](https://aatel.org)*\n';
      ok = downloadFile(md, 'README_aatel_v2.1_'+safe+'_'+yr+'.md');
    }
    if (ok) showStatus('✓ Licenza scaricata con successo!', 'success');
    else    showStatus('✗ Errore nel download.', 'error');
  }

  /* ── GEN TABS ── */
  function switchGenTab(tab) {
    document.querySelectorAll('.gen-tab-panel').forEach(function(p) { p.classList.remove('active'); });
    document.querySelectorAll('.gen-tab-btn').forEach(function(b) { b.classList.remove('active'); });
    document.getElementById('tab-' + tab).classList.add('active');
    document.getElementById('tab-btn-' + tab).classList.add('active');
    var gen = document.querySelector('.generator');
    if (gen) gen.classList.toggle('gen-ic-active', tab === 'ic');
  }

  /* ── aatel-IC v2.1 GENERATOR ── */

  function getICFields() {
    var aiCur = (document.getElementById('ic-ai-currency').value || '').trim() ||
                (document.getElementById('ic-currency').value || '').trim() || null;
    var comCur = (document.getElementById('ic-threshold-cur').value || '').trim() ||
                 (document.getElementById('ic-currency').value || '').trim() || null;
    return {
      anno:      (document.getElementById('ic-year').value      || '').trim() || null,
      nome:      (document.getElementById('ic-name').value      || '').trim() || null,
      email:     (document.getElementById('ic-email').value     || '').trim() || null,
      citta:     (document.getElementById('ic-city').value      || '').trim() || null,
      aiFixed:   (document.getElementById('ic-ai-fixed').value  || '').trim() || null,
      aiPer1k:   (document.getElementById('ic-ai-per1k').value  || '').trim() || null,
      aiCur:     aiCur,
      soglia:    (document.getElementById('ic-threshold').value || '').trim() || null,
      comCur:    comCur,
      importo:   (document.getElementById('ic-fixed').value     || '').trim() || null,
      percento:  (document.getElementById('ic-percent').value   || '').trim() || null,
      pagamento: (document.getElementById('ic-payment').value   || '').trim() || null,
      payinstr:  (document.getElementById('ic-payinstr').value  || '').trim() || null,
      registryUrl: (document.getElementById('ic-registry') ? (document.getElementById('ic-registry').value || '').trim() : null) || null,
    };
  }

  function fillIC(tmpl, f) {
    var cur = f.aiCur || f.comCur || '[VALUTA]';
    return tmpl
      .replace(/\{\{ANNO\}\}/g,         f.anno      || '[ANNO]')
      .replace(/\{\{NOME\}\}/g,         f.nome      || '[NOME/ORGANIZZAZIONE]')
      .replace(/\{\{EMAIL\}\}/g,        f.email     || '[EMAIL]')
      .replace(/\{\{CITTÀ\}\}/g,        f.citta     || '[CITTÀ]')
      .replace(/\{\{AI_FISSO\}\}/g,     f.aiFixed   || '[IMPORTO FISSO AI]')
      .replace(/\{\{AI_PER1K\}\}/g,     f.aiPer1k   || '[IMPORTO PER 1.000 QUERY]')
      .replace(/\{\{VALUTA\}\}/g,       cur)
      .replace(/\{\{SOGLIA\}\}/g,       f.soglia    || '[SOGLIA]')
      .replace(/\{\{IMPORTO\}\}/g,      f.importo   || '[IMPORTO FISSO]')
      .replace(/\{\{PERCENTUALE\}\}/g,  f.percento  || '[PERCENTUALE]')
      .replace(/\{\{PAGAMENTO\}\}/g,    f.pagamento || '[METODO]')
      .replace(/\{\{PAYINSTR\}\}/g,     f.payinstr  || '[ISTRUZIONI]')
      .replace(/\{\{REGISTRY_URL\}\}/g, f.registryUrl || '[REGISTRY_URL]');
  }

  function updateICPreview() {
    var f = getICFields();
    var lines = fillIC(IC_LICENSE_IT, f).split('\n').slice(0, 14);
    var html = lines.map(function(line) {
      return line.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
        .replace(/\[([A-Z\/\s\u00C0-\u00FC\.\-]+)\]/g,'<span class="ph">[$1]</span>');
    }).join('\n');
    document.getElementById('ic-preview-live').innerHTML = html + '\n<span class="ph">… [documento completo]</span>';
  }

  function validateIC() {
    var f = getICFields();
    var missing = [];
    if (!f.anno)      missing.push('Anno');
    if (!f.nome)      missing.push('Nome');
    if (!f.email)     missing.push('Email');
    if (!f.citta)     missing.push('Città foro');
    if (!f.aiFixed)   missing.push('Canone fisso AI');
    if (!f.aiPer1k)   missing.push('Fee per 1.000 risposte');
    if (!f.aiCur)     missing.push('Valuta AI');
    if (!f.soglia)    missing.push('Soglia fatturato');
    if (!f.importo)   missing.push('Importo fisso entità');
    if (!f.percento)  missing.push('Percentuale');
    if (!f.pagamento) missing.push('Metodo pagamento');
    if (!f.payinstr)  missing.push('Istruzioni pagamento');
    if (missing.length > 0) {
      showStatus('⚠ Campi mancanti: ' + missing.join(', '), 'error');
      document.getElementById('ic-gen-form').scrollIntoView({ behavior:'smooth', block:'center' });
      return null;
    }
    return f;
  }

  function downloadICLicense(type) {
    var f = validateIC();
    if (!f) return;
    var safe = (f.nome || 'aatel-ic').replace(/[^a-zA-Z0-9_\- ]/g,'_').replace(/\s+/g,'_');
    var yr = f.anno || new Date().getFullYear();
    var ok = false;
    if (type === 'it') {
      ok = downloadFile(fillIC(IC_LICENSE_IT, f), 'aatel-IC_v2.1_IT_'+safe+'_'+yr+'.txt');
    } else if (type === 'en') {
      ok = downloadFile(fillIC(IC_LICENSE_EN, f), 'aatel-IC_v2.1_EN_'+safe+'_'+yr+'.txt');
    } else if (type === 'both') {
      ok = downloadFile(fillIC(IC_LICENSE_IT, f), 'aatel-IC_v2.1_IT_'+safe+'_'+yr+'.txt');
      setTimeout(function() { downloadFile(fillIC(IC_LICENSE_EN, f), 'aatel-IC_v2.1_EN_'+safe+'_'+yr+'.txt'); }, 400);
    } else if (type === 'md') {
      var cur = f.aiCur || f.comCur || 'EUR';
      var md = '# aatel-IC v2.1 — Anti-AI Training Ethical License — Internet Content Edition\n\n';
      md += '> Copyright (c) ' + yr + ' ' + f.nome + '  \n';
      md += '> Governing law: Italian law + EU regulations  \n';
      md += '> Jurisdiction: Court of ' + (f.citta||'[CITTÀ]') + ', Italy\n\n';
      md += '## ✔ Permitted\n- Reading, quoting, sharing with attribution\n- Personal non-commercial use\n- Non-profits, NGOs, companies under €1M: free (notification only)\n\n';
      md += '## ✘ Prohibited\n- ❌ AI/ML training, fine-tuning, evaluation data use\n- ❌ AI scraping or automated collection pipelines\n- ❌ Military or paramilitary use\n- ❌ Commercial use without notification and payment\n\n';
      md += '## 🤖 AI Engines (E.g. Google, Bing, Perplexity… and/or similar)\n';
      md += '**Fee per use — cache does NOT reset the obligation.**\n\n';
      md += '1. **Notify before launch**: [' + f.email + '](mailto:' + f.email + ')\n';
      md += '2. **Monthly fee:**\n';
      md += '   - Fixed: ' + f.aiFixed + ' ' + cur + '/month\n';
      md += '   - Variable: ' + f.aiPer1k + ' ' + cur + ' per 1,000 responses served\n';
      md += '3. **No tracking data**: automatic 100% presumption\n';
      md += '4. **Missing robots.txt** ≠ implicit permission\n';
      md += '5. **Joint liability** across all group entities\n';
      md += '6. **Non-compliance**: 3× penalty + removal within 15 days\n\n';
      md += '## 🏢 Commercial Entities (non-AI)\n';
      md += '1. **Notify**: [' + f.email + '](mailto:' + f.email + ')\n';
      md += '2. **Fee:**\n';
      md += '   - Tier 0 (revenue < €1M): free, notification only\n';
      md += '   - Tier A (€1M ≤ revenue < ' + f.soglia + ' ' + cur + '): ' + f.importo + ' ' + cur + '/month\n';
      md += '   - Tier B (≥ ' + f.soglia + ' ' + cur + '): ' + f.importo + ' ' + cur + '/month + ' + f.percento + '% revenue/12\n';
      md += '   - Payment via ' + f.pagamento + ': ' + f.payinstr + '\n\n';
      md += '---\n*aatel-IC v2.1 — Not legal advice. [aatel.org](https://aatel.org)*\n';
      ok = downloadFile(md, 'README_aatel-IC_v2.1_'+safe+'_'+yr+'.md');
    }
    if (ok) showStatus('✓ Licenza scaricata con successo!', 'success');
    else    showStatus('✗ Errore nel download.', 'error');
  }

  /* ══════════════════════════════════════════════════════════════
     COOKIE & LICENSE CONSENT LOGIC
     ══════════════════════════════════════════════════════════════ */

  var icConsentAccepted = false;

  function toggleICConsent() {
    icConsentAccepted = !icConsentAccepted;
    var row = document.getElementById('ic-checkbox-row');
    var inp = document.getElementById('ic-consent-input');
    row.classList.toggle('checked', icConsentAccepted);
    row.setAttribute('aria-checked', String(icConsentAccepted));
    inp.checked = icConsentAccepted;
    document.querySelectorAll('.consent-btn-confirm').forEach(function(btn) {
      btn.disabled = !icConsentAccepted;
    });
    if (icConsentAccepted) {
      document.getElementById('ic-required-msg').classList.remove('show');
      document.getElementById('ic-required-msg-en').classList.remove('show');
    }
  }

  function syncICCheckbox() {
    icConsentAccepted = document.getElementById('ic-consent-input').checked;
    var row = document.getElementById('ic-checkbox-row');
    row.classList.toggle('checked', icConsentAccepted);
    row.setAttribute('aria-checked', String(icConsentAccepted));
    document.querySelectorAll('.consent-btn-confirm').forEach(function(btn) {
      btn.disabled = !icConsentAccepted;
    });
  }

  document.getElementById('ic-checkbox-row').addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleICConsent(); }
  });

  function saveConsent(analytics, prefs) {
    try {
      var data = {
        ts: Date.now(),
        essential: true,
        analytics: analytics,
        prefs: prefs,
        icLicense: true,
        icVersion: '2.0'
      };
      localStorage.setItem('aatel-consent', JSON.stringify(data));
    } catch(e) {}
  }

  function hideOverlay() {
    var overlay = document.getElementById('consent-overlay');
    overlay.classList.add('hidden');
    var bar = document.getElementById('consent-accepted-bar');
    bar.classList.remove('hidden');
    setTimeout(function() { bar.classList.add('hidden'); }, 5000);
  }

  function acceptEssential() {
    if (!icConsentAccepted) {
      document.getElementById('ic-required-msg').classList.add('show');
      document.getElementById('ic-required-msg-en').classList.add('show');
      document.getElementById('ic-checkbox-row').scrollIntoView({ behavior:'smooth', block:'center' });
      return;
    }
    saveConsent(false, false);
    hideOverlay();
  }

  function acceptAll() {
    if (!icConsentAccepted) {
      document.getElementById('ic-required-msg').classList.add('show');
      document.getElementById('ic-required-msg-en').classList.add('show');
      document.getElementById('ic-checkbox-row').scrollIntoView({ behavior:'smooth', block:'center' });
      return;
    }
    document.getElementById('ck-analytics').checked = true;
    document.getElementById('ck-prefs').checked = true;
    saveConsent(true, true);
    hideOverlay();
  }

  function confirmConsent() {
    if (!icConsentAccepted) return;
    var analytics = document.getElementById('ck-analytics').checked;
    var prefs     = document.getElementById('ck-prefs').checked;
    saveConsent(analytics, prefs);
    hideOverlay();
  }

  function reopenConsent() {
    document.getElementById('consent-accepted-bar').classList.add('hidden');
    document.getElementById('consent-overlay').classList.remove('hidden');
  }

  function dismissBar() {
    document.getElementById('consent-accepted-bar').classList.add('hidden');
  }

  /* ── MODALE LICENZA ── */
  function openLicenseModal(e) {
    if (e) e.preventDefault();
    document.getElementById('license-modal-overlay').classList.add('open');
    document.getElementById('license-modal').querySelector('.lm-body').scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function closeLicenseModal() {
    document.getElementById('license-modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('license-modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeLicenseModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('license-modal-overlay').classList.contains('open')) {
      closeLicenseModal();
    }
  });

  /* On load: check if already consented */
  (function() {
    try {
      var saved = localStorage.getItem('aatel-consent');
      if (saved) {
        var data = JSON.parse(saved);
        if (data && data.icLicense && (Date.now() - data.ts) < 365 * 24 * 3600 * 1000) {
          document.getElementById('consent-overlay').classList.add('hidden');
          return;
        }
      }
    } catch(e) {}
    document.getElementById('consent-overlay').classList.remove('hidden');
  })();
