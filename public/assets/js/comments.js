const commentFormHandler = async function (event) {
    event.preventDefault();

    const comment_id = document.querySelector('.new-comment-form').dataset.blogid;

    const comment_description = document.querySelector('#comment_description').value.trim();

    if (comment_description) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                id,
                comment_description,
                date_create,
                book_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload();
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);
