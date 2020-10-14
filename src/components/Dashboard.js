import React, { Component } from 'react'
import "./Dashboard.css"
import { Button, Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setDashboard } from "../states/actions/dashboardActions";

class Dashboard extends Component {

    onBack = () => {
        const payload = {
			flag: false,
			info: {}
		}
        this.props.setDashboard(payload);
    }

    render() {
        return (
            <div className="dashboard">
                <Button onClick={this.onBack}>
                    haha
                </Button>
                <Container>
                    <Row>
                        <Col md={2} style={{"background":"green"}}>
                            lala
                        </Col>
                        <Col md="auto">
                            <Row>
                                <Col>
                                    a
                                </Col>
                                <Col>
                                    b
                                </Col>
                                <Col>
                                    c
                                </Col>
                                <Col>
                                    d
                                </Col>
                            </Row>
                            <Row>
                                chua
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

Dashboard.propTypes = {
	setDashboard: PropTypes.func.isRequired,
}

export default connect(null, { setDashboard })(Dashboard);
