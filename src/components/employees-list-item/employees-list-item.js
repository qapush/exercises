import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    };
  }

  onIncrease = () => {
    console.log('sss');
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };
  onLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };
  render() {
    const { name, salary } = this.props;
    const { increase, like } = this.state;
    let itemClassName = 'list-group-item d-flex justify-content-between';
    if (increase) {
      itemClassName += ' increase';
    } else if (like) {
      itemClassName += ' like';
    }

    return (
      <li className={itemClassName}>
        <span className="list-group-item-label" onClick={this.onLike}>
          {name}
        </span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-cookie btn-sm ">
            <i className="fas fa-cookie" onClick={this.onIncrease}></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;