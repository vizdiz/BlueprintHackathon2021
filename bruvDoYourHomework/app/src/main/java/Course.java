import java.util.PriorityQueue;

public class Course {

    String courseName;
    String courseID;

    PriorityQueue<Assignment> currentAssignments = new PriorityQueue<Assignment>(10, new AssignmentComparator);

    Course(String courseName) {
        this.courseName = courseName;
        courseID = null;
    }

    Course(String courseName, String courseID) {
        this.courseName = courseName;
        this.courseID = courseID;
    }

    public String getCourseName() {
        return courseName;
    }
    public String getCourseID() {
        return courseID;
    }
    public PriorityQueue getCurrentAssignments() {
        return currentAssignments;
    }
}
