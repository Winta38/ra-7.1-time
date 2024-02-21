import React from "react";
import moment from "moment";

const withPretty = (Component) => {
  class WithPretty extends React.Component {
    static displayName = `WithPretty(${
      Component.displayName || Component.name || "Component"
    })`;

    dateModify = (date) => {
      moment.locale("ru", {
        relativeTime: {
          past: "%s назад",
          s: "несколько секунд",
          m: "одна минута",
          mm: (number) => {
            let dec = "";
            return (
              number +
              " " +
              (((dec = number % 100) >= 11 && dec <= 19) ||
              (dec = number % 10) >= 5 ||
              dec === 0
                ? "минут"
                : dec === 1
                ? "минута"
                : "минуты")
            );
          },
          h: "один час",
          hh: (number) => {
            let dec = "";
            return (
              number +
              " " +
              (((dec = number % 100) >= 11 && dec <= 19) ||
              (dec = number % 10) >= 5 ||
              dec === 0
                ? "часов"
                : dec === 1
                ? "час"
                : "часа")
            );
          },
          d: "один день",
          dd: (number) => {
            let dec = "";
            return (
              number +
              " " +
              (((dec = number % 100) >= 11 && dec <= 19) ||
              (dec = number % 10) >= 5 ||
              dec === 0
                ? "дней"
                : dec === 1
                ? "день"
                : "дня")
            );
          },
        },
      });

      moment.relativeTimeThreshold("d", 10000);
      return moment(date).fromNow();
    };

    render() {
      return (
        <Component {...this.props} date={this.dateModify(this.props.date)} />
      );
    }
  }

  return WithPretty;
};

export default withPretty;
