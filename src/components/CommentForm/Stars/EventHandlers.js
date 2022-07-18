import middleStar from "../../../Assets/middleStar.svg";
import grayStar from "../../../Assets/star-gray.svg";
import star from "../../../Assets/star.svg";

export function hoverHandler(e) {
    // Defining stars for set rating for the new comment
    const star1 = document.getElementById('star1')
    const star2 = document.getElementById('star2')
    const star3 = document.getElementById('star3')
    const star4 = document.getElementById('star4')
    const star5 = document.getElementById('star5')

    star1.addEventListener('mouseout', hoverOutHandler)
    star2.addEventListener('mouseout', hoverOutHandler)
    star3.addEventListener('mouseout', hoverOutHandler)
    star4.addEventListener('mouseout', hoverOutHandler)
    star5.addEventListener('mouseout', hoverOutHandler)

    let id = e.target.id

    switch (id) {
        case 'star1': {
            star1.setAttribute('src', middleStar)
            star2.setAttribute('src', grayStar)
            star3.setAttribute('src', grayStar)
            star4.setAttribute('src', grayStar)
            star5.setAttribute('src', grayStar)
            break;
        }
        case 'star2': {
            star1.setAttribute('src', middleStar)
            star2.setAttribute('src', middleStar)
            star3.setAttribute('src', grayStar)
            star4.setAttribute('src', grayStar)
            star5.setAttribute('src', grayStar)
            break;
        }
        case 'star3': {
            star1.setAttribute('src', middleStar)
            star2.setAttribute('src', middleStar)
            star3.setAttribute('src', middleStar)
            star4.setAttribute('src', grayStar)
            star5.setAttribute('src', grayStar)
            break;
        }
        case 'star4': {
            star1.setAttribute('src', middleStar)
            star2.setAttribute('src', middleStar)
            star3.setAttribute('src', middleStar)
            star4.setAttribute('src', middleStar)
            star5.setAttribute('src', grayStar)
            break;
        }
        case 'star5': {
            star1.setAttribute('src', middleStar)
            star2.setAttribute('src', middleStar)
            star3.setAttribute('src', middleStar)
            star4.setAttribute('src', middleStar)
            star5.setAttribute('src', middleStar)
            break;
        }
        default: {
            throw new Error('sum error')
        }
    }
}

export function hoverOutHandler() {
    // Defining stars for set rating for the new comment
    const star1 = document.getElementById('star1')
    const star2 = document.getElementById('star2')
    const star3 = document.getElementById('star3')
    const star4 = document.getElementById('star4')
    const star5 = document.getElementById('star5')

    star1.setAttribute('src', grayStar)
    star2.setAttribute('src', grayStar)
    star3.setAttribute('src', grayStar)
    star4.setAttribute('src', grayStar)
    star5.setAttribute('src', grayStar)
}

export function clickHandler(e) {
    // Defining stars for set rating for the new comment
    const star1 = document.getElementById('star1')
    const star2 = document.getElementById('star2')
    const star3 = document.getElementById('star3')
    const star4 = document.getElementById('star4')
    const star5 = document.getElementById('star5')

    let id = e.target.id

    star1.removeEventListener('mouseout', hoverOutHandler)
    star2.removeEventListener('mouseout', hoverOutHandler)
    star3.removeEventListener('mouseout', hoverOutHandler)
    star4.removeEventListener('mouseout', hoverOutHandler)
    star5.removeEventListener('mouseout', hoverOutHandler)

    switch (id) {
        case 'star1': {
            document.getElementById('num-inp').value = 1
            star1.setAttribute('src', star)
            star2.setAttribute('src', grayStar)
            star3.setAttribute('src', grayStar)
            star4.setAttribute('src', grayStar)
            star5.setAttribute('src', grayStar)
            document.getElementsByClassName('comment-form__email')[0].focus()
            break;
        }
        case 'star2': {
            document.getElementById('num-inp').value = 2
            star1.setAttribute('src', star)
            star2.setAttribute('src', star)
            star3.setAttribute('src', grayStar)
            star4.setAttribute('src', grayStar)
            star5.setAttribute('src', grayStar)
            document.getElementsByClassName('comment-form__email')[0].focus()
            break;
        }
        case 'star3': {
            document.getElementById('num-inp').value = 3
            star1.setAttribute('src', star)
            star2.setAttribute('src', star)
            star3.setAttribute('src', star)
            star4.setAttribute('src', grayStar)
            star5.setAttribute('src', grayStar)
            document.getElementsByClassName('comment-form__email')[0].focus()
            break;
        }
        case 'star4': {
            document.getElementById('num-inp').value = 4
            star1.setAttribute('src', star)
            star2.setAttribute('src', star)
            star3.setAttribute('src', star)
            star4.setAttribute('src', star)
            star5.setAttribute('src', grayStar)
            document.getElementsByClassName('comment-form__email')[0].focus()
            break;
        }
        case 'star5': {
            document.getElementById('num-inp').value = 5
            star1.setAttribute('src', star)
            star2.setAttribute('src', star)
            star3.setAttribute('src', star)
            star4.setAttribute('src', star)
            star5.setAttribute('src', star)
            document.getElementsByClassName('comment-form__email')[0].focus()
            break;
        }
        default: {
            throw new Error('sum error')
        }
    }
}