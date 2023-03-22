window.addEventListener('DOMContentLoaded', () => {

    const myData = [
        {id: 1, bookTitle: 'Name of the wind', author: 'Patrick Ruthfuss', publisher: 'Anubis', yearOfPublishing: '2001'},
        {id: 2, bookTitle: 'Wise Mans fear', author: 'Tolkin', publisher: 'Prosveta', yearOfPublishing: '2004'},
        {id: 3, bookTitle: 'Fire and Ice', author: 'Joe Done', publisher: 'New York Times', yearOfPublishing: '2022'},
        {id: 4, bookTitle: 'LOTR', author: 'Done Joe', publisher: 'Industial', yearOfPublishing: '2016'},
        {id: 5, bookTitle: 'Name of the wind', author: 'Patrick Ruthfuss', publisher: 'Anubis', yearOfPublishing: '2001'},
        {id: 6, bookTitle: 'Wise Mans fear', author: 'Tolkin', publisher: 'Prosveta', yearOfPublishing: '2004'},
        {id: 7, bookTitle: 'Fire and Ice', author: 'Joe Done', publisher: 'New York Times', yearOfPublishing: '2022'},
        {id: 8, bookTitle: 'Name of the wind', author: 'Patrick Ruthfuss', publisher: 'Anubis', yearOfPublishing: '2001'},
        {id: 9, bookTitle: 'Wise Mans fear', author: 'Tolkin', publisher: 'Prosveta', yearOfPublishing: '2004'},
        {id: 10, bookTitle: 'Fire and Ice', author: 'Joe Done', publisher: 'New York Times', yearOfPublishing: '2022'},
        

    ]

    const table = document.createElement('table');
    const tHead = document.createElement('thead');
    const tBody = document.createElement('tbody');
    const tHeadRow = document.createElement('tr');

    // [id, bookTitle, author, publisher, yearOfPublishing]
    Object.keys(myData[0]).forEach(key => {
        let th = document.createElement('th');
        th.innerText = key;
        tHeadRow.append(th);
    })
    tHead.append(tHeadRow)
    
    
    myData.forEach(user => {
        let tableRow = document.createElement('tr');

        Object.keys(user).forEach(key => {
            let td = document.createElement('td');
            td.innerText = user[key];
            // td.innerText = user.key;
            tableRow.append(td);
        });
        tBody.append(tableRow)
    })


    tBody.addEventListener('mouseover', function(event) {
        let target = event.target.closest('tr');

        if(!target) return;

        // target.style.background = 'grey';

        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        target.style.background = `rgb(${red}, ${green}, ${blue})`
    })

    table.append(tHead);
    table.append(tBody);
    document.body.append(table);


    





});

    