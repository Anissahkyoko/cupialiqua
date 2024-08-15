return this.value && !_.modified() ? this.value : _.values.reduce((data, _) => data.concat(_), []);
