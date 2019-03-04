import React, {
  Component,
  Fragment
} from 'react';
import Header from './components/Header/Header';
import Articles from './components/Articles/Articles';
import BarLoader from './components/BarLoader/BarLoader';
import { fetchArticlesData, fetchCostumizationData } from './data/mockApi';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      costumizationData: null,
      articlesData: null
    }

    this.getCostumizationData = this.getCostumizationData.bind(this);
    this.getArticlesData = this.getArticlesData.bind(this);
  }

  async componentDidMount() {
    await this.getCostumizationData();
    await this.getArticlesData();

    this.setState({ loading: false });
  }
  
  async getCostumizationData() {
    try {
      const costumizationData = await fetchCostumizationData();
      this.setState({ costumizationData });
    } catch (error) {
      console.log(error);
    }
  }

  async getArticlesData() {
    try {
      const articlesData = await fetchArticlesData();
      this.setState({ articlesData });
    } catch (error) {
      console.log(error);
    }
  }
  
  render() {
    const { costumizationData, articlesData } = this.state;
    const { loading } = this.state;
    return (
      <Fragment>
        {loading && <BarLoader />}
        <Header costumization={costumizationData}/>
        <Articles articles={articlesData}/>
      </Fragment>
    );
  }
}

export default App;