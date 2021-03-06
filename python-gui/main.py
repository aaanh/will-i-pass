import PySimpleGUI as psg
import conf

version = str(conf.VERSION) + conf.VERSION_STATE

course_modules_checkbox = [
    [psg.Checkbox("Homeworks", default=False)],
    [psg.Checkbox("Midterms", default=False)],
    [psg.Checkbox("Labs", default=False)],
    [psg.Checkbox("Finals", default=False)],
]

nav_btn_group = [
    [psg.Button('Calculate')],
    [psg.Button('Exit')]
]

layout = [
    [psg.Text("Will I Pass")],
    course_modules_checkbox,
    nav_btn_group
]

window = psg.Window('Will I Pass?', layout, size=(
    conf.WIDTH, conf.HEIGHT), margins=(20, 20))


def will_i_pass():
    print("Nope")


while True:
    event, values = window.read()
    if event == psg.WIN_CLOSED or event == 'Exit':
        break
    if event == 'Calculate':
        will_i_pass()

window.close()
