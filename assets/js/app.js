// Tasks
const list = document.querySelector('#task-list');
const taskForm = document.querySelector('#task-form');
// Notes
const formNote = document.querySelector('#note-form');
const divNotes = document.querySelector('#notes');
const formForSearchNote = document.querySelector('#formForSearchNote');
//Bookmarks
const bookmarksForm = document.querySelector('#bookmark-form');
const bookmarksOutput = document.querySelector('#bookmark-output');
const formForSearchBookmark = document.querySelector('#formForSearchBookmark');
// Toggle form
const minimizeNotesForm = document.querySelector('#minimizeNotesForm');
const minimizeBookmarksForm = document.querySelector('#minimizeBookmarksForm');


// Show/Hide Notes Form
minimizeNotesForm.addEventListener('click', () => {
    const hide = document.querySelector('#hide-form-note');
    if(hide.style.display === 'block') {
        hide.style.display = 'none';
    }
    else {
        hide.style.display = 'block';
    }
});

// Show/Hide Notes Form
minimizeBookmarksForm.addEventListener('click', () => {
    const hide = document.querySelector('#hide-form-bookmarks');
    if(hide.style.display === 'block') {
        hide.style.display = 'none';
    }
    else {
        hide.style.display = 'block';
    }
});

// Delete data Tasks
list.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.parentElement.getAttribute('data-id');
        db.collection('tasks').doc(id).delete().then(() => {
            
        });
    }
});

// Add data Tasks
taskForm.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();
    if(taskForm.taskTitle.value === '') {
        Task.fillForm('Fill in Form!', 'warning mt-4');
    }else {
        db.collection('tasks').add({
            taskTitle: taskForm.taskTitle.value,
            created_at: firebase.firestore.Timestamp.fromDate(now)  
        });
    }  
    taskForm.taskTitle.value = ''; 
});

// Delete data Notes
divNotes.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.classList.contains('delete')) {
        const id = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
        db.collection('notes').doc(id).delete().then(() => {

        });
    }
});

// Add data Notes
formNote.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();
    if(formNote.noteTitle.value === '' && formNote.noteContent.value === '') {
        Note.fillForm('Fill in Form!', 'warning mt-4');
    } else {
        db.collection('notes').add({
            noteTitle: formNote.noteTitle.value,
            noteContent: formNote.noteContent.value,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        });
    }
    formNote.noteTitle.value = '';
    formNote.noteContent.value = '';
    
});

// Add data Bookmarks
bookmarksForm.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();
    if(bookmarksForm.bookmarkName.value === '' && bookmarksForm.bookmarkUrl.value === '') {
        Bookmark.fillForm('Fill in Form!', 'warning mt-4');
    }else {
        db.collection('bookmarks').add({
            bookmarkName: bookmarksForm.bookmarkName.value,
            bookmarkUrl: bookmarksForm.bookmarkUrl.value,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        });
    }
    
    bookmarksForm.bookmarkName.value = '';
    bookmarksForm.bookmarkUrl.value = '';
});

// Delete data Bookmarks
bookmarksOutput.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        const id = e.target.parentElement.parentElement.getAttribute('data-id');
        db.collection('bookmarks').doc(id).delete().then(() => {

        });
     
    }
});

// Search Notes
formForSearchNote.addEventListener('keyup', e => {
    e.preventDefault();
    const search = e.target.value.toLowerCase();
    document.querySelectorAll('.accordion').forEach(note => {
        const item = note.firstElementChild.innerText.trim();
        if(item.toLowerCase().indexOf(search) != -1) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
    });

});

// Search Bookmarks
formForSearchBookmark.addEventListener('keyup', e => {
    e.preventDefault();
    const search = e.target.value.toLowerCase();
    document.querySelectorAll('.bookmarkSearch').forEach(bookmark => {
        const item = bookmark.firstElementChild.innerText.trim();
        if(item.toLowerCase().indexOf(search) != -1) {
            bookmark.style.display = 'block';
        } else {
            bookmark.style.display = 'none';
        }
    })
});



