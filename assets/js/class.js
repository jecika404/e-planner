////// TASK //////
class Task {
    constructor(taskTitle) {
        this.taskTitle = taskTitle;
    }
    static addTask(task, id) {
        const when = dateFns.distanceInWordsToNow(
                        task.created_at.toDate(),
                        { addSuffix: true }
                    );
        const row = document.createElement('tr');
        row.setAttribute('data-id', id);
        row.innerHTML = `
            <td class="text-tasks">
                ${task.taskTitle}<p class="time text-muted">${when}</p>
            </td>
            <td>
                <button href="#" class="btn btn-sm float-right delete">X</button>    
            </td>`;
        list.appendChild(row);
    }
    static deleteTask = (id) => {
        const tasks = document.querySelectorAll('tr');
        tasks.forEach(task => {
            if(task.getAttribute('data-id') === id) {
                task.remove();
            }
        });
    }
    static fillForm(message, className) {
        const fill = document.createElement('div');
        fill.className = `alert alert-${className}`;
        fill.appendChild(document.createTextNode(message));
        const tabsTask = document.querySelector('#tabs-task');
        const tabsCard = document.querySelector('.card');
        tabsTask.insertBefore(fill, tabsCard);
        setTimeout(() => document.querySelector('.alert').remove(), 1500);

    }

}


////// NOTES //////
class Note {
    constructor(noteTitle, noteContent) {
        this.noteTitle = noteTitle;
        this.noteContent = noteContent;
    }
    // ADD NOTES
    static addNote(note, id) {
    const when = dateFns.distanceInWordsToNow(
        note.created_at.toDate(),
        { addSuffix: true }
    );
    const divAccordion = document.createElement('div');
    divAccordion.className = 'accordion';
    divAccordion.setAttribute('data-id', id);
    divAccordion.innerHTML = `
            <div class="card search">
            <div class="card-header" id="titleNote">   
                <h2 class="mb-0">  
                <button class="btn btnNote " type="button" data-toggle="collapse" data-target="#${id}">${note.noteTitle}    
                </button>
                <button  class="btn btn-sm float-right delete">X</button>
                </h2>
                <p class="time text-muted">${when}</p>  
            </div>  
        </div>
        <div id="${id}" class="collapse" aria-labelledby="headingOne" data-parent="#notes">
            <div class="card-body">
            ${note.noteContent}
            </div>
        </div>`;
    
    divNotes.appendChild(divAccordion);
}

    static deleteNote = (id) => {
        const notes = document.querySelectorAll('.accordion');
        notes.forEach(note => {
            if(note.getAttribute('data-id') === id) {
                note.remove();
            }
        });
    }
    static fillForm(message, className) {
        const fill = document.createElement('div');
        fill.className = `alert alert-${className}`;
        fill.appendChild(document.createTextNode(message));
        const tabsNote = document.querySelector('#tabs-notes');
        const tabsCard = document.querySelector('#hide-form-note');
        tabsNote.insertBefore(fill, tabsCard);
        setTimeout(() => document.querySelector('.alert').remove(), 1500);
    }

}

////// BOOKMARKS //////
class Bookmark {
    constructor(bookmarkName, bookmarkUrl) {
        this.bookmarkName = bookmarkName;
        this.bookmarkUrl = bookmarkUrl;
    }
    static addBookmark(bookmark, id) {
        const when = dateFns.distanceInWordsToNow(
            bookmark.created_at.toDate(),
            { addSuffix: true }
        );
        const output = document.createElement('ul');
        output.setAttribute('data-id', id);
        output.classList = 'list-group bookmarkSearch';
        output.innerHTML = `
            <li class="list-group-item mb-3">
                ${bookmark.bookmarkName}
                <button class="btn btn-sm float-right delete ml-2">X</button>
                <a href="${bookmark.bookmarkUrl}" class="btn btn-sm btn-secondary float-right url" target="_blank"><i class="fa fa-google"></i></a>
                <p class="time text-muted">${when}</p>
            </li>
        `;
        bookmarksOutput.appendChild(output);
    }

    static deleteBookmarks = (id) => {
        const bookmarks = document.querySelectorAll('ul');
        bookmarks.forEach(bookmark => {
            if(bookmark.getAttribute('data-id') === id) {
                bookmark.remove();
            }
        });
    }

    static fillForm(message, className) {
        const fill = document.createElement('div');
        fill.className = `alert alert-${className}`;
        fill.appendChild(document.createTextNode(message));
        const tabsBookmarker = document.querySelector('#tabs-bookmarker');
        const tabsCard = document.querySelector('#fill-form');
        tabsBookmarker.insertBefore(fill, tabsCard);
        setTimeout(() => document.querySelector('.alert').remove(), 1500);
    }
}











