
export function template( {content} ) {
    return `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="stylesheet" type="text/css" href="/bootstrap/bootstrap.css">
                    <link rel="stylesheet" type="text/css" href="/media/styles/main.css">
                    <title>Trello App</title>
                </head>
                <body>
                    <nav class="navbar navbar-default modal-title">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <a href="#"><span class="page-logo"></span></a>
                            </div>
                        </div>
                    </nav>
                    <div class="container-fluid main-container bg-2 text-center">
                        ${content}
                    </div>
                </body>
                </html>`;
}