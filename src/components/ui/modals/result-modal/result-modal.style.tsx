import { Dimensions, StyleSheet } from 'react-native'

const MODAL_WIDTH = Dimensions.get('screen').width * 1

export const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // position: 'fixed',
    // width: '100%',
    // height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingRight: 16,
    backgroundColor: 'rgba(0,0,0,0)',
    // zIndex: 10000000,'
  },
  container: {
    maxWidth: MODAL_WIDTH,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: MODAL_WIDTH,
    borderRadius: 20,
  },
  view: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 700,
    fontFamily: 'Quintessential-Regular',
  },

  text: {
    maxWidth: '90%',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 300,
    marginBottom: 15,
  },

  starsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  star: {
    width: 100,
    height: 100,
    marginHorizontal: -5,
  },
  star_bottom: {
    marginTop: 30,
  },

  stars_bottom: {
    marginTop: 40,
    flexDirection: 'row',
    marginHorizontal: -10,
  },

  footer: {},
})
