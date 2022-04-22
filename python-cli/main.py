print("Will I Pass Calculator")
print("Note: counting starts from 0, grade and weight are decimals")

weight_of_fins = 0.0
weight_of_hw = 0.0
weight_of_labs = 0.0
weight_of_mids = 0.0

is_homework = int(input("Homework? 0 = no, 1 = y\n> Answer: "))
homeworks = []
if is_homework == 1:
    num_of_hw = int(input("Number of homework? (positive integer)\n> Answer: "))
    weight_of_hw = float(input("Enter total weight of homework (0 to 1): "))
    for i in range(num_of_hw):
        temp = float(input(f"Enter homework {i} grade (0.0 to 1.0): "))
        homeworks.append(temp)

is_midterm = int(input("Midterm? 0 = no, 1 = y\n> Answer: "))
midterms = []
if is_midterm == 1:
    num_of_mids = int(input("Number of midterms? (positive integer)\n> Answer: "))
    weight_of_mids = float(input("Enter total weight of midterm (0.0 to 1.0): "))
    for i in range(num_of_mids):
        temp = float(input(f"Enter midterm {i} grade: "))
        midterms.append(temp)

is_lab = int(input("Labs? 0 = no, 1 = y\n> Answer: "))
labs = []
if is_lab == 1:
    num_of_labs = int(input("Number of labs? (positive integer)\n> Answer: "))
    weight_of_labs = float(input("Enter total weight of labs (0.0 to 1.0): "))
    for i in range(num_of_labs):
        temp = int(input(f"Enter lab {i} grade (0.0 to 1.0): "))
        labs.append(temp)

is_final = int(input("Final? 0 = no, 1 = y\n> Answer: "))
finals = []
if is_final == 1:
    num_of_fins = int(input("Number of finals? (positive integer)\n> Answer: "))
    weight_of_fins = float(input("Enter total weight of finals (0.0 to 1.0): "))
    for i in range(num_of_fins):
        temp = float(input(f"Enter final {i} grade (0.0 to 1.0): "))
        finals.append(temp)

passing_grade = float(input("What's the passing grade? (0.00 to 1.00): "))

total_weight = weight_of_mids + weight_of_fins + weight_of_hw + weight_of_labs

def will_i_pass(passing_grade, homeworks, midterms, labs, finals, fin_weight, mid_weight, hw_weight, lab_weight):
    hw_grade = 0.0
    mid_grade = 0.0
    lab_grade = 0.0
    fin_grade = 0.0
    for i in homeworks:
        hw_grade += i
    for j in midterms:
        mid_grade += j
    for k in labs:
        lab_grade += k
    for l in finals:
        fin_grade += l
    
    return passing_grade <= hw_grade * hw_weight + mid_grade * mid_weight + lab_grade * lab_weight + fin_grade * fin_weight

print(f"Calculated input total weight: {total_weight}")
if total_weight < 1.0:
    is_continue = int(input(f"Total weight input is less than 100%. Do you want to continue? 0 = no, 1 = yes\n> Answer: "))
    if is_continue == 1:
        will_i_pass(passing_grade, homeworks, midterms, labs, finals, weight_of_fins, weight_of_mids, weight_of_hw, weight_of_labs) if print("Yes, you will pass") else print("No, you ain't")
    else:
        print("App will now exit. Rerun to start over. Not gonna implement redo at this moment. Lol.")
        exit(0)
else:
    try:
        will_i_pass(passing_grade, homeworks, midterms, labs, finals, weight_of_fins, weight_of_mids, weight_of_hw, weight_of_labs) if print("Yes, you will pass") else print("No, you ain't")
    except:
        print("There might be something wrong when you input data. App will now exit.")
        exit(1)
