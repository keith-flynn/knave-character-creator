from PySide6.QtWidgets import QMainWindow, QToolBar, QPushButton, QStatusBar
from PySide6.QtCore import QSize
from PySide6.QtGui import QAction, QIcon

class MainWindow(QMainWindow):
    def __init__(self, app):
        super().__init__()
        self.app = app # declare an app member
        self.setWindowTitle("Knave Character Generator")

        # Menubar and menus
        menu_bar = self.menuBar()
        file_menu = menu_bar.addMenu("File")
        quit_action = file_menu.addAction("Quit")
        quit_action.triggered.connect(self.quit_app)

        edit_menu = menu_bar.addMenu("Edit")
        edit_menu.addAction("Copy")
        edit_menu.addAction("Cut")
        edit_menu.addAction("Paste")
        edit_menu.addAction("Undo")
        edit_menu.addAction("Redo")

        # Working with toolbars
        toolbar = QToolBar("My main toolbar")
        toolbar.setIconSize(QSize(16, 16))
        self.addToolBar(toolbar)

        # Add quit action to toolbar
        toolbar.addAction(quit_action)

        action1 = QAction("Some action", self)
        action1.setStatusTip("Status message for some action")
        action1.triggered.connect(self.toolbar_button_click)
        toolbar.addAction(action1)

        # Icon not displaying? try 'python main.py' in console instead of just hitting play in IDE
        action2 = QAction(QIcon("./assets/start1.png"), "Some other action", self)
        action2.setStatusTip("Status message for some other action")
        action2.triggered.connect(self.toolbar_button_click)
        #action2.setCheckable(True)
        toolbar.addAction(action2)

        toolbar.addSeparator()
        toolbar.addWidget(QPushButton("Click here"))

        # Working with status bars
        self.setStatusBar(QStatusBar(self))

        button1 = QPushButton("BUTTON1")
        button1.clicked.connect(self.button1_clicked)
        self.setCentralWidget(button1)


    def quit_app(self):
        self.app.quit()

    def toolbar_button_click(self):
        self.statusBar().showMessage("Message from app", 3000)

    def button1_clicked(self):
        print("Clicked on the button!")