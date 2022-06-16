import MenuItem from "./MenuItem/MenuItem";
import SideMenu from "./SideMenu/SideMenu";

const TeacherDashboard = (props) => {
    return ( <><SideMenu labDetails={labDetails}  onCollapse={((inactive) => {
          setInactive(inactive);
        })}/></> );
}
 
export default TeacherDashboard;