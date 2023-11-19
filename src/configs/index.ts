import envConfigs, { EnvConfigs } from './env.configs'

type AppConfigs = {
  env: EnvConfigs
}

const configs: AppConfigs = {
  env: envConfigs,
}

export default configs
