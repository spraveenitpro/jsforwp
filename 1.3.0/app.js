/********************************
 * Getting the parent of a node
 * 1.3.4.1
 *
 *******************************/


/*var h1 = document.querySelector( 'h1' ),
     h1ParentEl = h1.parentElement,
     h1ParentNode = h1.parentNode;

 console.log( h1ParentEl );
 console.log( h1ParentNode );*/
//
// console.log( h1.parentNode.parentNode );


/*var h1 = document.querySelector('h1'),
    h1parentEl = h1.parentElement,
    h1parentNode = h1.parentNode;

console.log(h1parentEl);
console.log(h1parentNode);
console.log(h1.parentNode.parentNode);*/




/********************************
 * Getting children/child of a node
 * 1.3.4.2
 *
 *******************************/


var content = document.querySelector( '.content' ),
    contentChildrenEls = content.children,
    contentChildrenNodes = content.childNodes,
    contentFirstChildNode = content.firstChild,
    contentLastChildNode = content.lastChild,
    contentLastChildEl = content.lastElementChild,
    contentFirstChildEl = content.firstElementChild;

 console.log( contentChildrenEls );
 console.log( contentChildrenNodes );
 console.log( contentFirstChildNode );
 console.log( contentLastChildNode );
 console.log( contentLastChildEl );
 console.log( contentFirstChildEl );

/*
 var h1 = document.querySelector('h1'),
     h1Parentel = h1.parentElement,
     h1ParentNode = h1.parentNode;

     console.log(h1Parentel);
     console.log(h1ParentNode);
     console.log(h1.parentNode.parentNode);
*/




 console.log( contentChildrenEls.length );
 console.log( contentChildrenNodes.length );
 console.log( contentFirstChildNode.nodeType );
 console.log( contentLastChildNode.nodeType );
 console.log( contentLastChildEl.nodeType );
 console.log( contentFirstChildEl.nodeType );

 console.log( content.childElementCount );



var contact = document.getElementById('contact'),
    contactPrevNode = contact.previousSibling,
    contactNextNode = contact.nextSibling,
    contactPreviousEl = contact.previousElementSibling,
    contactNextEl = contact.nextElementSibling;

console.log(contactPrevNode, contactNextNode);
console.log(contactPreviousEl, contactNextEl);

var content = document.querySelector('.content'),
    newOuterHTML;

    newOuterHTML = '<div class="content active">';
    newOuterHTML += '<h1>New title</h1>';
    newOuterHTML += '<p>Nuevo lorem</p>';
    newOuterHTML += '</div>';

    content.outerHTML = newOuterHTML;






/********************************
 * Getting siblings of a node
 * 1.3.4.3
 *
 *******************************/







// End 1.3.4
