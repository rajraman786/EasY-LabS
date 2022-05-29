import { Divider, Grid, Typography } from "@mui/material";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import Logo from "../../assets/long-logo.png";

const ProblemEditor = (props) => {
    return (
        <>
            <div style={{ height: "50px" }}>
                <img src={Logo} alt="logo" height="100%" />
            </div>
            <Grid
                container
                rowSpacing={{ xs: 0, md: 0, lg: 0 }}
                // columnSpacing={4}
                justifyContent="center"
                sx={{ height: "calc(100vh - 50px)", padding: "0 15px" }}
            >
                <Grid item xs={12} md={6} sx={{ overflowY: "scroll", height: "100%" }}>
                    PROBLEM STATEMENT
                    <Typography variant="h6">{"Two Sum"}</Typography>
                    <Divider sx={{ margin: "10px 0" }} />
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum
                        urna, semper at enim sed, mattis interdum erat. Morbi aliquam augue magna,
                        eget condimentum arcu pharetra at. Suspendisse pretium dignissim vulputate.
                        Nunc at tellus dictum, porttitor tellus sit amet, fringilla magna. Nunc
                        ullamcorper eros eu libero imperdiet iaculis at in urna. Nullam posuere
                        pulvinar eros ut pulvinar. Maecenas blandit fermentum orci, vel feugiat diam
                        pellentesque vel. Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Curabitur et malesuada dui, et ultricies diam. Duis scelerisque,
                        nibh eget pellentesque laoreet, massa felis volutpat lacus, eu placerat elit
                        tellus eget turpis. Sed maximus felis nec lorem feugiat ultrices ac et enim.
                        Phasellus tincidunt placerat orci vel consectetur. Curabitur non faucibus
                        urna. Vivamus lobortis purus nec laoreet interdum.
                        <br />
                        Donec porta nisl velit, eu cursus turpis feugiat non. Praesent ultricies
                        facilisis nulla, aliquet tempus urna venenatis non. Nullam vel ligula eget
                        dui blandit rutrum. Donec tincidunt lectus non est interdum luctus. Maecenas
                        mi turpis, volutpat ut ante ac, posuere consectetur lorem. Sed id est
                        tincidunt tortor aliquam faucibus. Integer sed ligula molestie, aliquam
                        purus vitae, hendrerit ex. Morbi odio urna, ultricies vel metus quis, congue
                        maximus erat. In condimentum ultricies odio, sed vehicula odio elementum ac.
                        In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus. Praesent accumsan, dui vel
                        mollis dapibus, risus elit mollis est, non varius est libero a purus. Nunc
                        vitae orci consectetur, feugiat justo vitae, sagittis ipsum. Proin porttitor
                        dignissim lobortis.
                        <br />
                        Vestibulum placerat lacus at molestie varius. Aliquam eget malesuada diam,
                        in dignissim augue. Fusce vitae turpis non ante rutrum placerat semper vel
                        ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Nunc sollicitudin enim gravida mauris tincidunt,
                        vitae semper nulla convallis. Duis mollis justo ut dictum maximus. Donec
                        auctor nulla quis interdum elementum. Ut varius orci et mi finibus porta.
                        Cras congue, quam in congue accumsan, enim neque pretium nisi, sed
                        scelerisque neque risus non velit. Cras eget tellus porta, venenatis nisl
                        id, dapibus risus. Donec ut odio vitae magna pretium tincidunt. Maecenas
                        lectus turpis, tempus ac risus et, laoreet venenatis dolor. Suspendisse vel
                        pretium quam, ut posuere enim. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia curae;
                        <br />
                        Mauris ipsum risus, bibendum sed lectus ut, varius hendrerit neque. Proin
                        accumsan, metus volutpat pretium rutrum, velit magna sagittis orci, sit amet
                        tempor elit diam eu lectus. Nullam mollis tellus sit amet erat feugiat, et
                        scelerisque lorem tempor. Nunc placerat turpis vel gravida ultrices. Donec
                        eleifend magna lorem, non posuere mauris hendrerit nec. Nam pellentesque
                        eros ut turpis tincidunt feugiat. Duis ornare nibh et mauris tempor
                        imperdiet.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ height: "100%" }}>
                    CODE EDITOR
                    <CodeEditor />
                </Grid>
            </Grid>
        </>
    );
};

export default ProblemEditor;
