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

    public int getAssignmentDueDate() {
        return assignmentDueDate;
    }
    public String getAssignmentName() {
        return assignmentName;
    }
    public int getAssignmentID() {
        return assignmentID;
    }

    public void setAssignmentDueDate(int assignmentDueDate) {
        this.assignmentDueDate = assignmentDueDate;
    }
    public void setAssignmentID(int assignmentID) {
        this.assignmentID = assignmentID;
    }
    public void setAssignmentName(String assignmentName) {
        this.assignmentName = assignmentName;
    }
}
