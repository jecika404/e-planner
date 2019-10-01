// Get data Tasks
db.collection('tasks').orderBy('created_at').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added') {
            Task.addTask(doc.data(), doc.id);
        } else if(change.type === 'removed') {
            Task.deleteTask(doc.id);
        }
    });
});
// Get data Notes
db.collection('notes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added') {
            Note.addNote(doc.data(), doc.id);
        } else if(change.type === 'removed') {
            Note.deleteNote(doc.id);
        }
    });
});
// Get data Bookmarks
db.collection('bookmarks').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added') {
            Bookmark.addBookmark(doc.data(), doc.id);
        } else if(change.type === 'removed') {
            Bookmark.deleteBookmarks(doc.id);
        }
    });
});

