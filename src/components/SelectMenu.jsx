//https://www.youtube.com/watch?v=qkCV4DesiCs

import { useEffect, useState } from "react";
import './SelectMenu.css'
import { findAllInRenderedTree } from "react-dom/test-utils";

const SelectMenu = () => {
    const [selection, setSelection] = useState("");
    const [position, setPosition] = useState([]);
    const [state, setState] = useState("ready"); // a string that holds ready or selected or  selecting to only show the select menu when the user is done selecting text

    function onSelectStart() {
        setState('selecting');
        setSelection(undefined);
    }
    function onMouseUp() {
        const activeSelection = document.getSelection();
        if (!activeSelection) return;
        const text = activeSelection.toString();
        setSelection(text);
        if (!text) {
            setState('ready');
            setSelection(undefined);
            return;
        }
        const rect = activeSelection.getRangeAt(0).getBoundingClientRect();
        //80 is height of the menu
        //no, 30 is the height of the menu
        //20 is the padding, if u will
        setPosition({
            x: rect.left + (rect.width / 2) - (80 / 2),
            y: rect.top + window.scrollY - 30 - 20,
            width: rect.width,
            height: rect.height,
        })

        setState('selected');
    }

    useEffect(() => {
        document.addEventListener('selectstart', onSelectStart);
        document.addEventListener('mouseup', onMouseUp); //make mobile frindtly!!
        return () => { //cleanup
            document.removeEventListener('selectStart', onSelectStart);
            document.removeEventListener('mouseup', onMouseUp);
        }
    }, [])

    function copyContent() {
        console.log('copied');
        navigator.clipboard.writeText("verseText");
    }

    function shareContent() {
        console.log('shared');
        //let subjectEncoded = encodeURIComponent(book.bookName + " " + chapter);
        //document.getElementById('emailMe').href = "mailto:example@website.com?subject=" + subjectEncoded;
    }

    function highlightContent() {
        console.log('highlighted');
        const selection = document.getSelection();
        console.log(selection);
        let v1 = selection.anchorNode.wholeText.split(" ")[1];
        let v2 = selection.extentNode.wholeText.split(" ")[1];
        let vStart = selection.anchorOffset;
        let vEnd = selection.extentOffset;
        let bookName = "idkNephiRandom";
        let chapter = 1;
        let info = `${bookName} ${chapter}, verse ${v1} start ${vStart} to verse ${v2} ${vEnd}`;
        console.log(info);
        //highlight = Highlight(v1, v2, vStart, vEnd, chapter, book.bookName);
        //console.log(highlight.toString())
    }


    return (
        <>
            {selection && position && (
                <div className="highlightBox"
                    style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}>
                    <button title="Copy" className="material-symbols-outlined" onClick={copyContent}>content_copy</button>
                    <button title="Share" className="material-symbols-outlined" onClick={shareContent}>share</button>
                    <button title="Highlight" className="material-symbols-outlined" onClick={highlightContent}>format_ink_highlighter</button>
                </div >
            )}
        </>
    )
}

export default SelectMenu;
