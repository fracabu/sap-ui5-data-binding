SETUP
1.creare cartella con nome progetto e aprirla in vscode

2. `npm init --yes`: Questo comando ti permette di creare il file package.json

3. creare una cartella webapp: questo ti permetterà di poter eseguire il comando successivo

4. `ui5 init`: crea un file ui5.yaml

5. Creare un file manifest.json nella cartella webapp

6. `ui5 use sapui5@latest`: Questo comando ti permette di installare l'ultima versione di sapui5

7. Nella cartella webapp creare un file index.html e un index.js 

8.aggiungere a index.html gli script necessari a ui5 nella head

9.aggiungere a index.js il codice necessario per inizializzare l'app e stampare qualcosa a video

10. 7. `ui5 serve`: Questo comando avvia un server web sulla porta predefinita (porta 8080) e ti permette di visualizzare il tuo progetto UI5 nel browser.

DATA BINDING

Il data binding in UI5 consente di collegare i dati ai controlli dell'interfaccia utente in modo da mostrare i dati in tempo reale. Ci sono diversi tipi di data binding, tra cui:

1. One-way binding: i dati vengono mostrati nel controllo, ma eventuali modifiche al controllo non influiscono sui dati.

2. Two-way binding: i dati vengono mostrati nel controllo e le modifiche al controllo vengono salvate anche nel modello di dati.

3. Property binding: i dati vengono assegnati a una proprietà del controllo.

4. Aggregation binding: i dati vengono utilizzati per popolare una lista o una tabella.

Per utilizzare il data binding in UI5, è necessario attuare le seguenti operazioni:

1. Creare un modello di dati: il modello definisce i dati che verranno mostrati nell'interfaccia utente.

2. Collegare il modello ai controlli dell'interfaccia utente: il data binding viene utilizzato per collegare i dati del modello ai controlli dell'interfaccia utente.

3. Definire il tipo di data binding: determinare il tipo di data binding da utilizzare, in base alle esigenze.

4. Aggiornare i dati: ogni volta che i dati vengono modificati, ricaricare l'interfaccia utente.

Con il data binding in UI5, è possibile creare applicazioni più dinamiche e interattive, in grado di visualizzare i dati in tempo reale e di rispondere alle modifiche degli utenti.


CREATING A MODEL

Un model in UI5 è un oggetto che gestisce i dati dell'applicazione. Esistono vari tipi di modelli, come il modello JSON o OData. 

Per creare un model in UI5 devi innanzitutto definire il tipo di modello che hai intenzione di utilizzare. Ad esempio, se vuoi utilizzare un modello JSON, dovrai definire la sorgente dati JSON e configurare il modello di conseguenza. 

Dopo aver definito il tipo di modello, crea l'oggetto del modello effettivo. Ciò significa definire tutte le proprietà e i metodi per accedere e manipolare i dati del modello.

Una volta creato il modello, puoi utilizzarlo per associare i dati dell'applicazione a vari elementi dell'interfaccia utente, come le tabelle o le form. Il modello gestisce i dati in modo coerente e consente di aggiornare facilmente l'interfaccia utente quando i dati sono modificati. 

In sintesi, un model in UI5 serve a gestire i dati dell'applicazione in modo efficace e coerente, semplificando la manipolazione dei dati e la loro visualizzazione nell'interfaccia utente.

ESEMPIO

Per creare un semplice model in UI5, è necessario seguire i seguenti passi:

1. Creare un nuovo file JavaScript nella cartella del progetto UI5.
2. Definire un nuovo modello di dati in questo file. Ad esempio, è possibile creare un modello basato su un oggetto JSON come questo:

```
var oModel = new sap.ui.model.json.JSONModel({
    "name": "Mario Rossi",
    "age": 30,
    "address": {
        "street": "Via Roma 1",
        "city": "Milano",
        "zip": "20121"
    }
});
```

3. Impostare il modello creato come modello del componente UI5. Ad esempio, è possibile utilizzare il seguente codice per impostare il modello come modello radice del componente:

```
sap.ui.getCore().setModel(oModel);
```

4. Ora è possibile utilizzare il modello creato nei controlli UI5. Ad esempio, è possibile utilizzare il seguente codice per visualizzare il nome del modello in una casella di testo UI5:

```
var oInput = new sap.m.Input({
    value: "{/name}"
});
```

In questo esempio, la proprietà "value" dell'elemento di input UI5 è legata al valore della chiave "name" nel modello creato, utilizzando la sintassi di associazione dei dati di UI5.


PROPERTY BUILDING

Le property building in UI5 sono delle proprietà che consentono di modificare l'aspetto degli oggetti grafici, come ad esempio pulsanti o caselle di testo, all'interno del framework user interface di SAP. Queste proprietà includono dimensioni, posizione, colore di sfondo e di testo, bordi e riempimenti. Grazie a queste proprietà è possibile personalizzare il look delle interfacce utente sviluppate con UI5 per adattarle alle esigenze specifiche di un progetto o di un'azienda.

ESEMPIO

Si, ecco un esempio di property building in UI5:

```
// Dichiarazione della proprietà in un controllo UI5
new sap.ui.core.Control({
  myProperty: { 
    type: "string",
    defaultValue: "Hello World" 
  }
});

// Utilizzo della proprietà definita
var myControl = new sap.ui.core.Control({
  myProperty: "Hi there"
});

// Accesso al valore della proprietà
var myValue = myControl.getMyProperty(); // Output: "Hi there"
``` 

In questo esempio, abbiamo creato una proprietà personalizzata chiamata `myProperty` all'interno di un controllo UI5. La proprietà ha un tipo di dato stringa e un valore predefinito di "Hello World". Nel corpo del programma, abbiamo creato un nuovo controllo utilizzando la proprietà personalizzata `myProperty`. Abbiamo anche modificato il valore della proprietà in "Hi there". Infine, abbiamo utilizzato il metodo `getMyProperty()` per accedere al valore della proprietà personalizzata.

TWO WAY DATA BINDING

Il two way data binding UI5 è una tecnologia che permette di sincronizzare automaticamente i dati tra il frontend e il backend dell'applicazione. In pratica, ogni volta che un utente modifica i dati sulla pagina, queste modifiche vengono automaticamente salvate nel database, senza che sia necessario ricaricare la pagina o eseguire altre operazioni manuali. Ciò significa che l'applicazione può rispondere immediatamente alle modifiche dell'utente, migliorando l'esperienza utente complessiva e riducendo il rischio di errori di sincronizzazione dei dati.

Esempio:

Supponiamo di voler creare un'applicazione che permette all'utente di inserire il proprio nome e visualizzarlo in tempo reale in una label. Si può utilizzare il two way data binding con il seguente codice:

1. Nella vista della nostra applicazione UI5, creiamo una Text Input che permette all'utente di inserire il proprio nome:

```
<Input value="{/name}"/>
```

2. Aggiungiamo una Label che visualizzerà il nome inserito dall'utente:

```
<Label text="{/name}"/>
```

3. Nel controller della nostra applicazione, definiamo un modello di dati che contiene il nome:

```
var oModel = new sap.ui.model.json.JSONModel({
    name: ""
});
this.getView().setModel(oModel);
```

4. Infine, collegare il modello di dati alla vista:

```
this.getView().bindElement({
    path: "/"
});
```

Con il codice sopra, il Two Way Data Binding viene creato automaticamente, e tutte le modifiche che l'utente apporta nell'Input verranno automaticamente visualizzate nella Label, senza bisogno di alcun codice aggiuntivo.

ONE WAY DATA BINDING

Il one way data binding in UI5 è il processo di aggiornamento automatico dell'interfaccia utente (UI) in modo unidirezionale, ovvero dal modello dei dati alla UI. Questo significa che i dati vengono aggiornati automaticamente nella UI ogni volta che cambiano nel modello dei dati, ma non viceversa. In altre parole, i dati non possono essere modificati direttamente dall'UI, ma solo attraverso il modello dei dati. Questo tipo di data binding è utile quando si desidera visualizzare i dati ma non si vogliono consentire modifiche dirette alla UI.

ESEMPIO

Supponiamo di avere un campo di input in cui l'utente può inserire un nome e un altro elemento UI5 che deve mostrare il saluto "Ciao, [nome]". Per creare un one way data binding tra questi due elementi, possiamo utilizzare la seguente sintassi:

1. Nel file view.xml:

```
<Input value="{/name}" />
<Text text="Ciao, {/name}" />
```

2. Nel file controller.js:

```
onInit : function() {
    var oModel = new sap.ui.model.json.JSONModel();
    oModel.setData({
        name: ""
    });
    this.getView().setModel(oModel);
}
```

In questo esempio, abbiamo utilizzato un modello JSON che contiene la proprietà "name" inizializzata a vuota. Nel campo di input, abbiamo impostato la proprietà "value" a "{/name}", il che significa che qualsiasi valore inserito dall'utente verrà salvato in "name". Nel testo, abbiamo utilizzato "{/name}" per visualizzare il saluto "Ciao, [nome]". Il modello viene impostato sulla vista nel metodo "onInit".

In questo modo, ogni volta che l'utente inserisce un nome nel campo di input, il testo "Ciao, [nome]" viene aggiornato automaticamente senza la necessità di creare un evento specifico. Questo è un esempio di one way data binding in cui i dati vengono aggiornati solo dal modello alla vista.

RESOURCE MODEL

Il resource model di UI5 è uno strumento che consente di gestire facilmente le risorse all'interno delle applicazioni web. In particolare, permette di raggruppare dati e stringhe di testo in singoli file JSON e di accedere a questi file da qualsiasi punto dell'applicazione in cui siano necessari. In questo modo, si riduce il tempo necessario per la ricerca delle risorse, consentendo agli sviluppatori di concentrarsi maggiormente sulla logica dell'applicazione. Inoltre, il resource model di UI5 offre l'opportunità di utilizzare diverse lingue all'interno dell'applicazione, senza la necessità di modificare direttamente il codice sorgente.

 BINDING PATHS ACCESSING PROPERTIES IN HIERARCHICALLY 
 STRUCTURED MODELS

 Binding Paths: Accessing Properties in Hierarchically Structured Models in ui5 si riferisce al modo in cui si accede alle proprietà di modelli strutturati gerarchicamente in ui5. In altre parole, è una tecnica che consente di accedere ai dati all'interno di un modello usando un percorso gerarchico. Questo è utile quando si lavora con modelli che hanno una struttura a albero, dove ogni nodo rappresenta un oggetto con proprietà specifiche. Utilizzando i binding paths è possibile accedere a questi nodi e alle loro proprietà in modo efficace e semplice. Ad esempio, nel caso di un albero di prodotti, si può accedere alla proprietà prezzo di un determinato prodotto utilizzando il binding path "nome_prodotto/prezzo". In questo modo si può accedere ai dati in modo efficiente e preciso all'interno di modelli complessi.

 ESEMPIO

 Supponiamo di avere un modello gerarchico che rappresenti un elenco di dipendenti e i loro dati personali, incluse informazioni sul dipartimento e sulla posizione:

```javascript
var oModel = new sap.ui.model.json.JSONModel({
  employees: [
    {
      firstName: "Mario",
      lastName: "Rossi",
      department: {
        name: "Vendite",
        position: "Responsabile"
      }
    },
    {
      firstName: "Luigi",
      lastName: "Verdi",
      department: {
        name: "Produzione",
        position: "Tecnico"
      }
    }
  ]
});
```

Per accedere alla posizione di Mario, possiamo utilizzare il binding path `employees/0/department/position`:

```javascript
var oText = new sap.m.Text({
  text: "{/employees/0/department/position}"
});
```

In questo caso, stiamo creando un'etichetta di testo che mostra la posizione del primo dipendente nell'elenco (`employees/0`). Per accedere alla posizione del secondo dipendente, utilizzeremo il binding path `employees/1/department/position`.


FORMATTING VALUES

Il formatting di valori in UI5 si riferisce alla capacità di visualizzare correttamente i dati in formato leggibile e comprensibile per l'utente. Ci sono diversi modi per formattare i valori in UI5, tra cui l'uso di formattatori predefiniti o personalizzati.

I formattatori predefiniti di UI5 sono disponibili per la maggior parte dei tipi di dati comuni, come le date e le valute. Ad esempio, il formattatore di valuta può essere utilizzato per visualizzare un numero in formato di valuta nella valuta corretta.

Per utilizzare un formattatore predefinito, è possibile utilizzare la funzione format del modello di binding per il tipo di dato corrispondente. Ad esempio, per formattare una data in un formato specifico, è possibile utilizzare il seguente codice:

```
<Text text="{path: 'pathToData', type: 'sap.ui.model.type.Date', formatOptions: {style: 'long'}}" />
```

È anche possibile creare formattatori personalizzati per gestire la formattazione di valori più complessi o specifici. I formattatori personalizzati vengono creati come classi JS e estendono la classe sap.ui.model.SimpleType. Ad esempio, il seguente codice mostra come creare un formattatore personalizzato per l'etichettatura di un valore booleano come "Yes" o "No":

```
sap.ui.define([
  "sap/ui/model/SimpleType"
], function(SimpleType) {
  "use strict";

  return SimpleType.extend("my.CustomBooleanFormatter", {

    formatValue: function(oValue) {
      return oValue ? "Yes" : "No";
    },

    parseValue: function(oValue) {
      return oValue === "Yes";
    },

    validateValue: function(oValue) {
      // implement validation logic here
    }
    
  });

});
```

Per utilizzare il formattatore personalizzato, si può utilizzare il seguente codice:

```
<Text text="{path: 'pathToData', type: 'my.CustomBooleanFormatter'}" />
```

In conclusione, il formatting di valori in UI5 è una funzionalità importante che consente di visualizzare i dati in modo chiaro e comprensibile. UI5 offre formattatori predefiniti per i tipi di dati più comuni, ma è anche possibile creare formattatori personalizzati per la gestione di formati di dati più complessi o specifici.

PROPERTY FORMATTING USING DATA TYPES

La formattazione della proprietà utilizzando i tipi di dati in ui5 si riferisce alla possibilità di definire come deve essere rappresentato un dato all'interno di un'interfaccia utente in base al suo tipo. Ad esempio, si può stabilire che un numero debba essere visualizzato con un determinato numero di cifre decimali, oppure che una data debba mostrarsi nel formato "dd/mm/yyyy". Ciò consente di assicurarsi che i dati siano rappresentati in modo coerente e facilmente comprensibile per l'utente finale. I tipi di dati in ui5 fungono da "ponte" tra la rappresentazione del dato nell'interfaccia utente e la sua rappresentazione effettiva. In questo modo, i dati vengono gestiti in modo più efficiente e preciso.

ESEMPIO

Ecco un esempio di formattazione della proprietà utilizzando i tipi di dati in UI5:

Supponiamo di avere la seguente proprietà nel nostro oggetto di modello:

`startDate: "2021-10-01T10:30:00Z"`

Per visualizzare questa data nel formato italiano, possiamo utilizzare il tipo di dati `date` di UI5 e una funzione di formattazione. Aggiungiamo la seguente proprietà all'oggetto di configurazione della vista:

```
<Text text="{ path: '/startDate', type: 'sap.ui.model.type.Date', formatOptions: { pattern: 'dd/MM/yyyy' } }" />
```

In questa configurazione, `sap.ui.model.type.Date` indica che la proprietà `startDate` è un tipo di dati `date`. `formatOptions` specifica il formato della data, in questo caso "dd/MM/yyyy".

Nota che la proprietà `text` del controllo `Text` viene utilizzata per visualizzare la data formattata.

In questo modo, quando la vista viene visualizzata, la data "2021-10-01T10:30:00Z" verrà visualizzata come "01/10/2021".


VALIDATION USING THE MESSAGE MANAGER

La validazione è un processo che controlla l'input dell'utente per garantire che sia corretto e valido. UI5 fornisce il Message Manager che consente di gestire gli errori di validazione in modo semplice ed efficace. 

Il Message Manager è uno strumento che consente di inviare messaggi di errore, avvertenza o informazione all'utente in base all'input fornito. Quando viene inserito un valore errato in un campo di input, il Message Manager crea un messaggio di errore che indica l'errore specifico. 

Questo messaggio viene visualizzato accanto al campo di input e l'utente viene avvisato del problema. Inoltre, il Message Manager permette di visualizzare il numero totale di messaggi di errore presenti sulla pagina. 

In conclusione, il Message Manager è un'importante funzionalità di UI5 che consente di gestire facilmente gli errori di validazione e informare l'utente in modo chiaro ed efficiente dell'input errato e dei problemi presenti.

ESEMPIO

Ecco un esempio di validazione utilizzando The Message Manager in UI5:

```
var oMessageManager = sap.ui.getCore().getMessageManager();
var oInputControl = this.byId("inputField");

//Check if input field is empty
if (!oInputControl.getValue()) {
   var sMessage = "Input field cannot be empty";
   oMessageManager.addMessages(
         new sap.ui.core.message.Message({
            message: sMessage,
            type: sap.ui.core.MessageType.Error,
            target: oInputControl.getId(),
            processor: this.oModel
         })
   );
}
```

In questo esempio, il Message Manager viene inizializzato e viene controllato se il campo di input è vuoto. Se sì, viene creato un nuovo messaggio di errore e aggiunto al Message Manager. Il messaggio viene associato al campo di input specificato tramite il suo ID e viene utilizzato il processore del modello di dati associato alla vista corrente. Questo consente di visualizzare il messaggio di errore direttamente accanto al campo di input vuoto e anche di utilizzarlo in altri controlli UI5 che accedono al Message Manager.

AGGREGATION BINDING USING TEMPLATES

Aggregation Binding in SAPUI5 è un meccanismo che consente di associare un modello a una lista o a una tabella per visualizzare dati in una vista. 

L'Aggregation Binding può essere utilizzato con diversi tipi di modelli come ad esempio JSON, OData, etc. e consente di definire un percorso di associazione che indica come leggere i dati dal modello.

Il Template di UI5 è una funzione in grado di creare automaticamente una visualizzazione per gli elementi di una lista o di una tabella. L'Aggregation Binding può essere utilizzata insieme al Template di UI5 per definire una struttura ricorrente.

Per utilizzare l'Aggregation Binding con il Template di UI5, è necessario definire la struttura dei dati e il percorso di associazione nel file della vista, ad esempio:

```
<List items="{/employees}" >
    <StandardListItem title="{FirstName} {LastName}" description="{Title}" />
</List>
```

In questo esempio, l'Aggregation Binding viene utilizzata per la visualizzazione degli elementi di `employees`. Per ogni elemento, il Template di UI5 crea un `StandardListItem` con `FirstName` e `LastName` come titolo e `Title` come descrizione.

In sostanza, l'Aggregation Binding tramite il Template di UI5 permette di creare facilmente una visualizzazione di un insieme di dati all'interno di una lista o di una tabella, senza dover definire manualmente la struttura di ogni elemento.


ELEMENT BINDING

Element Binding in UI5 è un metodo che consente di associare i dati di un modello di dati ad un determinato elemento di visualizzazione nella UI.

Ciò significa che i dati possono essere visualizzati in un modo dinamico senza dover aggiornare manualmente i campi di visualizzazione, poiché l'elemento di visualizzazione viene associato direttamente ai dati del modello.

L'element binding può essere utilizzato per diversi tipi di elementi di visualizzazione, come ad esempio formulari, tabelle, liste e molti altri, e può essere gestito anche tramite eventi, come il cambiamento dei dati nel modello o l'aggiornamento dell'elemento di visualizzazione.

In sintesi, l'element binding in UI5 è una funzionalità chiave che semplifica l'associazione dei dati ad un elemento di visualizzazione, eliminando la necessità di aggiornare manualmente i campi di visualizzazione.

ESEMPIO

Esempio di element binding in UI5:

Supponiamo di avere un modello di dati che contiene informazioni su diverse persone, come il loro nome, il loro cognome e la loro età. Vogliamo visualizzare queste informazioni in una tabella UI5, dove ogni riga rappresenta una persona.

Per fare ciò, dobbiamo definire una vista XML che contiene la tabella e specificare la fonte dati come il nostro modello di dati. Inoltre, dobbiamo definire l'element binding per ogni riga della tabella.

Ecco un esempio di codice XML per la vista:

```
<mvc:View
    xmlns="sap.m"
    xmlns:mvc="sap.ui.core.mvc"
    controllerName="myController"
>
    <Table items="{/people}">
        <columns>
            <Column>
                <Text text="Name"/>
            </Column>
            <Column>
                <Text text="Last Name"/>
            </Column>
            <Column>
                <Text text="Age"/>
            </Column>
        </columns>
        <items>
            <ColumnListItem
                type="Navigation"
                press="handleListItemPress"
                title="{Name}"
                description="{LastName}"
            >
                <cells>
                    <ObjectNumber number="{Age}"/>
                </cells>
            </ColumnListItem>
        </items>
    </Table>
</mvc:View>
```

In questo codice, abbiamo definito la tabella e abbiamo specificato che la fonte dati sarà l'oggetto `/people` del nostro modello. Inoltre, abbiamo definito il binding per ogni riga della tabella usando un `ColumnListItem`.

Il binding è stato definito utilizzando i parametri `title`, `description` e `number`, che leggono rispettivamente i valori delle proprietà `Name`, `LastName` e `Age` delle persone nel nostro modello. In questo modo, gli elementi della tabella verranno automaticamente popolati con le informazioni di ogni persona.

Questa è solo una breve introduzione all'element binding in UI5, ma si può comprendere che esso è un'importante funzionalità per collegare i dati ai componenti dell'interfaccia utente.

EXPRESSION BINDING

L'Expression Binding in ui5 è un metodo di binding che consente di creare formattazioni dinamiche o di valutare le espressioni in modo condizionale all'interno della UI.

È utile quando si vuole formattare una proprietà di un elemento in base a un'altra proprietà o a un valore di un modello, ad esempio il cambio di colore del testo in base a un valore di una colonna di dati.

Per utilizzare Expression Binding, è necessario specificare una stringa di espressione JavaScript, racchiusa tra parentesi graffe ({}), all'interno della proprietà dell'elemento che si desidera formattare.

Ad esempio, se si desidera che il testo di un pulsante sia dinamico e dipenda da una proprietà del modello, si può impostare la proprietà "text" del pulsante come segue:

text="{= ${/nomeProprietà} ? 'Testo se la condizione è true' : 'Testo se la condizione è false'}"

In questo esempio, la proprietà "text" del pulsante verrà valutata in modo dinamico in base alla condizione specificata tra le parentesi graffe e ai valori del modello.

In sintesi, l'Expression Binding permette una maggiore flessibilità e personalizzazione nella UI di un'applicazione.


