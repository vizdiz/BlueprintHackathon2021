import java.util.Comparator;

class AssignmentComparator implements Comparator<Assignment> {

    public int compare(Assignment a1, Assignment a2) {
        if(a1.assignmentDueDate - a2.assignmentDueDate > 0) {
            return 1;
        }
        else {
            return -1;
        }
    }

}
