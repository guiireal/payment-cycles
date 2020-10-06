import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import Tabs from "../components/Tab/Tabs";
import TabsHeader from "../components/Tab/TabsHeader";
import TabsContent from "../components/Tab/TabsContent";
import TabHeader from "../components/Tab/TabHeader";
import TabContent from "../components/Tab/TabContent";
import { selectTab, showTabs } from "../actions/tabActions";
class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab("tab-list");
    this.props.showTabs("tab-list", "tab-create");
  }

  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tab-list" />
              <TabHeader label="Incluir" icon="plus" target="tab-create" />
              <TabHeader label="Alterar" icon="pencil" target="tab-update" />
              <TabHeader label="Excluir" icon="trash-o" target="tab-delete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tab-list">
                <h1>Lista</h1>
              </TabContent>
              <TabContent id="tab-create">
                <h1>Incluir</h1>
              </TabContent>
              <TabContent id="tab-update">
                <h1>Atualizar</h1>
              </TabContent>
              <TabContent id="tab-delete">
                <h1>Excluir</h1>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab, showTabs }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
