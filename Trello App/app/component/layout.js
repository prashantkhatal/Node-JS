
export function template( {content} ) {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <link rel="stylesheet" type="text/css" href="/media/styles/layout.css">
                <title>Trello</title>
            </head>
            <body>
                <div class="nav-bar">
                    <div class="left-board-icon">Board</div>
                    <span class="page-logo"></span>
                </div>
                <div class="content">
                    ${content}
                </div>
            </body>
            </html>`;
}