import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

const config = new pulumi.Config();
const currentStack = pulumi.getStack();

const dbUsername = config.requireSecret('dbUsername');
const dbPassword = config.requireSecret('dbPassword');

const securityGroup = new aws.ec2.SecurityGroup(`reels-security-group-${currentStack}`, {
  ingress: [
    { protocol: 'tcp', fromPort: 22, toPort: 22, cidrBlocks: ['0.0.0.0/0'] },
    { protocol: 'tcp', fromPort: 5432, toPort: 5432, cidrBlocks: ['0.0.0.0/0'] }
  ]
});

const dbInstance = new aws.rds.Instance(`reels-database-${currentStack}`, {
    engine: 'postgres',
    instanceClass: 'db.t4g.micro',
    allocatedStorage: 20,
    username: dbUsername,
    password: dbPassword,
    publiclyAccessible: true,
    skipFinalSnapshot: true,
    vpcSecurityGroupIds: [securityGroup.id],
});

const ec2Instance = new aws.ec2.Instance(
  `reels-server-${currentStack}`,
  {
    instanceType: 't3.micro',
    ami: 'ami-07a64b147d3500b6a',
    securityGroups: [securityGroup.name]
  },
  { dependsOn: [dbInstance] }
);

// Export outputs
export const ec2PublicIp = ec2Instance.publicIp;
export const dbEndpoint = dbInstance.endpoint;
