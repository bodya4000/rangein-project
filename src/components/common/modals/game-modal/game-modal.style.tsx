import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
  },
  container: {
    width: '100%',
    maxWidth: 400,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    borderRadius: 20,
  },
  view: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 700,
    marginBottom: 24,
  },

  text: {
    maxWidth: '90%',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 300,
    marginBottom: 5,
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
