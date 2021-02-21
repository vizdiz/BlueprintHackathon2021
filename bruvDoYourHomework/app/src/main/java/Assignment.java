import java.util.PriorityQueue;

public class Assignment {

    String assignmentName;
    int assignmentDueDate; //year month day
    int assignmentID;

    Assignment(String assignmentName, int assignmentDueDate) {
            this.assignmentName = assignmentName;
            this.assignmentDueDate = assignmentDueDate;
    }

    Assignment(String assignmentName, int assignmentDueDate, int assignmentID) {
        this.assignmentName = assignmentName;
        this.assignmentDueDate = assignmentDueDate;
        this.assignmentID = assignmentID;
    }


}
r