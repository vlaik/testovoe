let statusMenu = false;

document.getElementById('contacts_bar').onclick = function() {
    if(statusMenu === false){

        document.getElementById('contacts').classList.add('show_contacts')
        document.getElementById('contacts').classList.remove('contacts')
    }else {
        
    document.getElementById('contacts').classList.add('contacts')
    document.getElementById('contacts').classList.remove('show_contacts')
    }
    statusMenu = !statusMenu
    
}


    console.log('hello')