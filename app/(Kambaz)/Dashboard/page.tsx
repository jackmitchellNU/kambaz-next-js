import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/react.jpg" width={200} height={150} alt="React JS course" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1235" className="wd-dashboard-course-link">
            <Image src="/images/diving.jpg" width={200} height={150} alt="Diving course" />
            <div>
              <h5> DIV1001 Diving </h5>
              <p className="wd-dashboard-course-title">
                Exploring the underwater world
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1236" className="wd-dashboard-course-link">
            <Image src="/images/bio.jpg" width={200} height={150} alt="Biology course" />
            <div>
              <h5> BIO101 Introduction to Biology </h5>
              <p className="wd-dashboard-course-title">
                Understanding the basics of biology
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1237" className="wd-dashboard-course-link">
            <Image src="/images/eece.jpg" width={200} height={150} alt="Electrical Engineering course" />
            <div>
              <h5> EECE101 Introduction to Electrical Engineering </h5>
              <p className="wd-dashboard-course-title">
                Understanding the basics of electrical engineering
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1238" className="wd-dashboard-course-link">
            <Image src="/images/japanese.jpg" width={200} height={150} alt="Japanese Literature and Culture course" />
            <div>
              <h5> HIST101 Introduction to Japanese Literature and Culture </h5>
              <p className="wd-dashboard-course-title">
                Understanding Japanese literature and culture
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1239" className="wd-dashboard-course-link">
            <Image src="/images/lin.jpg" width={200} height={150} alt="Linear Algebra course" />
            <div>
              <h5> MATH2899 Linear Algebra </h5>
              <p className="wd-dashboard-course-title">
                Understanding the concepts of linear algebra
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1240" className="wd-dashboard-course-link">
            <Image src="/images/crim.jpg" width={200} height={150} alt="Race, Crime, and Justice course" />
            <div>
              <h5> CRIM3400 Race, crime, and justice</h5>
              <p className="wd-dashboard-course-title">
                Understanding the criminal justice system
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
);}
