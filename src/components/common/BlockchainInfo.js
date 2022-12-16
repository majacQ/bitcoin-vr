import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-vr';

import { connect } from 'react-redux';

// Layout props
const _panelHeight = 30
const _panelWidth = 60;

function BlockchainInfo(props) {

  const curCurrency = 'BTC'
  const { largest, total, last } = props;

  return (
    <View style={styles.container}>
      <View style={styles.container_totalLargestNewest}>
        <Text style={styles.listItem}>Total</Text>
        <Text style={styles.listItem}>Largest</Text>
        <Text style={styles.listItemBottom}>Newest</Text>
      </View>

      <View style={styles.container_numberValues}>
        <Text style={styles.text_numberValues}>
          {`${curCurrency} ${total[0].toFixed(3)}\n ${curCurrency} ${largest[0].toFixed(3)}\n ${curCurrency} ${last[0].toFixed(3)}`}
        </Text>
      </View>

      <View style={styles.container_numberValues}>
        <Text style={styles.text_numberValues}>
          {`$ ${total[1].toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\n $ ${largest[1].toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\n $ ${last[1].toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    margin: 0.02
  },
  container_totalLargestNewest: {
    width: 0.4,
    flexDirection: 'column',
    padding: 0,
    paddingRight: 0.05
  },
  listItem: {
    textAlign: 'right',
    padding: 0,
    marginBottom: -0.028
  },
  listItemBottom: {
    textAlign: 'right',
    padding: 0,
    marginTop: -0.01
  },
  container_numberValues: {
    width: .8,
  },
  text_numberValues: {
    textAlign: 'left'
  }
})

const mapStateToProps = state => {
  return {
    largest: state.blockchainTransactions.largest,
    total: state.blockchainTransactions.total,
    last: state.blockchainTransactions.last
  }
}

export default connect(mapStateToProps)(BlockchainInfo);
