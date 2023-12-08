const weeklyActivityToken = process.env.WAKATIME_WEEKLY_ACTIVITY_TOKEN
const yearlyActivityToken = process.env.WAKATIME_YEARLY_ACTIVITY_TOKEN
const weeklyLanguageToken = process.env.WAKATIME_WEEKLY_LANGUAGE_TOKEN
const yearlyLanguageToken = process.env.WAKATIME_YEARLY_LANGUAGE_TOKEN

export const getWakaTime = async () => {
  const activity = await getActivity()
  const language = await getLanguage()

  return {
    activity: activity,
    language: language
  }
}

const getActivity = async () => {
  const weekly = await fetch(
    `https://wakatime.com/share/${weeklyActivityToken}`,
    {
      method: 'GET'
    }
  )
  const weeklyRes = await weekly.json()
  const yearly = await fetch(
    `https://wakatime.com/share/${yearlyActivityToken}`,
    {
      method: 'GET'
    }
  )
  const yearlyRes = await yearly.json()
  return {
    weekly: weeklyRes,
    yearly: yearlyRes
  }
}

const getLanguage = async () => {
  const weekly = await fetch(
    `https://wakatime.com/share/${weeklyLanguageToken}`,
    {
      method: 'GET'
    }
  )
  const weeklyRes = await weekly.json()
  const yearly = await fetch(
    `https://wakatime.com/share/${yearlyLanguageToken}`,
    {
      method: 'GET'
    }
  )
  const yearlyRes = await yearly.json()
  return {
    weekly: weeklyRes,
    yearly: yearlyRes
  }
}
