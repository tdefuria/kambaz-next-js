import Link from "next/link";
export default function Lab1() {
    return (
        <div id="wd-lab1">
            <ul>
                <li>
                    <Link href="/Labs" id="wd-labs-link">
                    Home </Link>
                </li>
            </ul>
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
Text docs are often broke up to sev sections and subsectio.
Each secti. is usu prefd w/ a short tit or head that att to sum up
the topic of the sect it precedes. For inst. this para is prec by the head Heading tags.
The font of the sect. headings are usu larger and bolder
than their subsect heads. This doc uses blah blah blah.
            </div>
            {/* do next exercise here */}
            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1">
Paragraph, this is. Separating with vertical spaces is not rendered by browser.
The only rendering is forced by wrapping paragraphs for separation with the p tag: 
lt slash p gt </p>
                <p id="wd-p-2">
This is the first paragraph. P Tag formats vert gaps long text like this.
                </p>
                <p id="wd-p-3">
This is the second p. Even though white space, default browsers dont
                </p>
                <p id="wd-p-4">
This is the third paragraph. Wrap each with p tag to tell browsers render gaps.
                </p>
            </div>
        </div>
);}